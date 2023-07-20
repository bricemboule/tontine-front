import {useEffect, useContext} from "react";
import RoleContext from "../../Context/RoleContext";
import React, { useState, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Modifier(){

    const {users, getUsers,setUsers} = useContext(RoleContext);

    let emptyUser = {
        id: null,
        nom: '',
        description: '',
        crée: '',
        modifié: '',
    };
   
  
    const [userDialog, setUserDialog] = useState(false);
    const [deleteUserDialog, setDeleteUserDialog] = useState(false);
    const [deleteUsersDialog, setDeleteUsersDialog] = useState(false);
    const [user, setUser] = useState(emptyUser);
    const [selectedUsers, setSelectedUsers] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    const cols = [
        { field: 'id', header: '' },
        { field: 'nom', header: 'Nom' },
        { field: 'description', header: 'Poste occupé' },
        {field : 'telephone1', header : 'Téléphone'},
        {field : 'email', header : 'Email'},
        {field : 'dateDebut', header:'Date Debut'},
        {fiel : 'dateFinPrevu', header : 'Date Echéance'}
    ];

    const exportColumns = cols.map((col) => ({ title: col.header, dataKey: col.field }));


   
    const openNew = () => {
        setUser(emptyUser);
        setSubmitted(false);
        setUserDialog(true);
    };

    const hideDialog = () => {
        setSubmitted(false);
        setUserDialog(false);
    };

    const hideDeleteUserDialog = () => {
        setDeleteUserDialog(false);
    };

    const hideDeleteUsersDialog = () => {
        setDeleteUsersDialog(false);
    };

    const saveUser = () => {
        setSubmitted(true);

        if (user.nom.trim()) {
            let _users = [...users];
            let _user = { ...user};

            if (user.id) {
                const index = findIndexById(user.id);

                _users[index] = _user;
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Utilisateur modifié avec succès', life: 3000 });
            } else {
                _user.id = createId();
                
                _users.push(_user);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Utilisateur créé avec succès', life: 3000 });
            }

            setUsers(_users);
            setUserDialog(false);
            setUser(emptyUser);
        }
    };

    const editUser = (user) => {
        setUser({ ...user});
        setUserDialog(true);
    };

    const confirmDeleteUser = (user) => {
        setUser(user);
        setDeleteUserDialog(true);
    };

    const deleteUser = () => {
        let _users = users.filter((val) => val.id !==user.id);

        setUsers(_users);
        setDeleteUserDialog(false);
        setUser(emptyUser);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Utilisateur supprimé', life: 3000 });
    };

    const findIndexById = (id) => {
        let index = -1;

        for (let i = 0; i < users.length; i++) {
            if (users[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    };

    const createId = () => {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        return id;
    };

    const exportPdf = () => {
        import('jspdf').then((jsPDF) => {
            import('jspdf-autotable').then(() => {
                const doc = new jsPDF.default(0, 0);

                doc.autoTable(exportColumns, users);
                doc.save('users.pdf');
            });
        });
    };

    const confirmDeleteSelected = () => {
        setDeleteUsersDialog(true);
    };

    const deleteSelectedUsers = () => {
        let _users = users.filter((val) => !selectedUsers.includes(val));

        setUser(_users);
        setDeleteUsersDialog(false);
        setSelectedUsers(null);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Utilisateurs supprimés', life: 3000 });
    };

  

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _user = { ...user};

        _user[`${name}`] = val;

        setUser(_user);
    };


    const leftToolbarTemplate = () => {
        return (
            <div className="d-flex flex-wrap gap-2">
                <Button label="Nouvel Utilisateur" icon="pi pi-plus" severity="success" onClick={openNew} />
                <Button label="Supprimer Utilisateur" icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelected} disabled={!selectedUsers || !selectedUsers.length} />
            </div>
        );
    };

    const rightToolbarTemplate = () => {
        return <Button label="Exporter" icon="pi pi-upload" className="p-button-help" onClick={exportPdf} />;
    };

  

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editUser(rowData)} />
                <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => confirmDeleteUser(rowData)} />
            </React.Fragment>
        );
    };

    const header = (
        <div className="d-flex flex-wrap gap-2 align-items-center justify-content-between">
            <h4 className="m-0">Gestion des utilisateur</h4>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );
    const userDialogFooter = (
        <React.Fragment>
            <Button label="Annuler" icon="pi pi-times" outlined onClick={hideDialog} />
            <Button label="Enregistrer" icon="pi pi-check" onClick={saveUser} />
        </React.Fragment>
    );


    const deleteUserDialogFooter = (
        <React.Fragment>
            <Button label="Non" icon="pi pi-times" outlined onClick={hideDeleteUserDialog} />
            <Button label="Oui" icon="pi pi-check" severity="danger" onClick={deleteUser} />
        </React.Fragment>
    );
    const deleteUsersDialogFooter = (
        <React.Fragment>
            <Button label="Non" icon="pi pi-times" outlined onClick={hideDeleteUsersDialog} />
            <Button label="Oui" icon="pi pi-check" severity="danger" onClick={deleteSelectedUsers} />
        </React.Fragment>
    );


    useEffect(()=>{
        getUsers();
    },[]);

  

    return (
      
        
        <div>
        <div className="content-wrapper">
            <div className="content">
                <div className="container-fluid">
                
                <div className="table-wrapper">
                <Toast ref={toast} />
                <br/>
                
            <div className="card">
            
                {console.log(users)}
                <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>

                <DataTable ref={dt} value={users} selection={selectedUsers} onSelectionChange={(e) => setSelectedUsers(e.value)}
                        dataKey="id"  paginator rows={2} rowsPerPageOptions={[5,10,15,20]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                         globalFilter={globalFilter} header={header}>
                       
                    <Column selectionMode="multiple" exportable={false}></Column>
                    <Column field="id" header="" style={{ minWidth: '5rem' }}></Column>
                    <Column field="nom" header="Nom" style={{ minWidth: '8rem' }}></Column>
                    <Column field="" header="Poste occupé" style={{ minWidth: '18rem' }} ></Column>
                    <Column field="telephone1" header="Téléphone" style={{ minWidth: '18rem' }} ></Column>
                    <Column field="email" header="Email" style={{ minWidth: '18rem' }} ></Column>
                    <Column field="dateDebut" header="Date début" style={{ minWidth: '18rem' }} ></Column>
                    <Column field="dateFinPrevu" header="Date Fin" style={{ minWidth: '18rem' }} ></Column>
                    <Column header="Action" body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column>
                </DataTable>
            </div>

            <Dialog visible={userDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Utilisateur" modal className="p-fluid" footer={userDialogFooter} onHide={hideDialog}>

                <div className="field">
                    <label htmlFor="name" className="font-bold">
                        Nom
                    </label>
                    <InputText id="nom" value={user.nom} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !user.nom })} />
                    {submitted && !user.nom && <small className="p-error">Le nom est requis.</small>}
                </div>
                <div className="field">
                    <label htmlFor="prenom" className="font-bold">
                        Prenom
                    </label>
                    <InputText id="description" value={user.prenom} onChange={(e) => onInputChange(e, 'prenom')} required autoFocus className={classNames({ 'p-invalid': submitted && !user.prenom })}/>
                </div>

            </Dialog>

            <Dialog visible={deleteUserDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Attention !!!" modal footer={deleteUserDialogFooter} onHide={hideDeleteUserDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {user && (
                        <span>
                            Etes-vous sûr(e) de vouloir supprimer l'utilisateur <b>{user.nom}</b> ?
                        </span>
                    )}
                </div>
            </Dialog>

            <Dialog visible={deleteUsersDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteUsersDialogFooter} onHide={hideDeleteUsersDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {user && <span>Etes-vous de vouloir supprimer les utilisateurs sélectionnés ?</span>}
                </div>
            </Dialog>
                </div>
                   
                </div>

            </div>
        </div>
         </div>
     )
}