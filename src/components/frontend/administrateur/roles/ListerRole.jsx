import {useEffect, useContext} from "react";
import RoleContext from "../../Context/RoleContext";
import React, { useState, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


export default function ListerRole(){
    const {roles, getRoles,setRoles} = useContext(RoleContext);

    let emptyRole = {
        id: null,
        nom: '',
        description: '',
        crée: '',
        modifié: '',
    };
   
  
    const [roleDialog, setRoleDialog] = useState(false);
    const [deleteRoleDialog, setDeleteRoleDialog] = useState(false);
    const [deleteRolesDialog, setDeleteRolesDialog] = useState(false);
    const [role, setRole] = useState(emptyRole);
    const [selectedRoles, setSelectedRoles] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
  


   
    const openNew = () => {
        setRole(emptyRole);
        setSubmitted(false);
        setRoleDialog(true);
    };

    const hideDialog = () => {
        setSubmitted(false);
        setRoleDialog(false);
    };

    const hideDeleteRoleDialog = () => {
        setDeleteRoleDialog(false);
    };

    const hideDeleteRolesDialog = () => {
        setDeleteRolesDialog(false);
    };

    const saveRole = () => {
        setSubmitted(true);

        if (role.nom.trim()) {
            let _roles = [...roles];
            let _role = { ...role };

            if (role.id) {
                const index = findIndexById(role.id);

                _roles[index] = _role;
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Role modifié avec succès', life: 3000 });
            } else {
                _role.id = createId();
                
                _roles.push(_role);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Role créé avec succès', life: 3000 });
            }

            setRoles(_roles);
            setRoleDialog(false);
            setRole(emptyRole);
        }
    };

    const editRole = (role) => {
        setRole({ ...role });
        setRoleDialog(true);
    };

    const confirmDeleteRole = (role) => {
        setRole(role);
        setDeleteRoleDialog(true);
    };

    const deleteRole = () => {
        let _roles = roles.filter((val) => val.id !== role.id);

        setRoles(_roles);
        setDeleteRoleDialog(false);
        setRole(emptyRole);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Role supprimé', life: 3000 });
    };

    const findIndexById = (id) => {
        let index = -1;

        for (let i = 0; i < roles.length; i++) {
            if (roles[i].id === id) {
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

 

    const confirmDeleteSelected = () => {
        setDeleteRolesDialog(true);
    };

    const deleteSelectedRoles = () => {
        let _roles = roles.filter((val) => !selectedRoles.includes(val));

        setRoles(_roles);
        setDeleteRolesDialog(false);
        setSelectedRoles(null);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Roles supprimés', life: 3000 });
    };

  

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _role = { ...role };

        _role[`${name}`] = val;

        setRole(_role);
    };


    const leftToolbarTemplate = () => {
        return (
            <div className="d-flex flex-wrap gap-2">
                <Button label="Nouveau role" icon="pi pi-plus" severity="success" onClick={openNew} />
                <Button label="Supprimer role" icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelected} disabled={!selectedRoles || !selectedRoles.length} />
            </div>
        );
    };

  
    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editRole(rowData)} />
                <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => confirmDeleteRole(rowData)} />
            </React.Fragment>
        );
    };

    const header = (
        <div className="d-flex flex-wrap gap-2 align-items-center justify-content-between">
            <h4 className="m-0">Gestion des roles</h4>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );
    const roleDialogFooter = (
        <React.Fragment>
            <Button label="Annuler" icon="pi pi-times" outlined onClick={hideDialog} />
            <Button label="Enregistrer" icon="pi pi-check" onClick={saveRole} />
        </React.Fragment>
    );


    const deleteRoleDialogFooter = (
        <React.Fragment>
            <Button label="Non" icon="pi pi-times" outlined onClick={hideDeleteRoleDialog} />
            <Button label="Oui" icon="pi pi-check" severity="danger" onClick={deleteRole} />
        </React.Fragment>
    );
    const deleteRolesDialogFooter = (
        <React.Fragment>
            <Button label="Non" icon="pi pi-times" outlined onClick={hideDeleteRolesDialog} />
            <Button label="Oui" icon="pi pi-check" severity="danger" onClick={deleteSelectedRoles} />
        </React.Fragment>
    );


    useEffect(()=>{
        getRoles();
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
                {console.log(roles)}
                <Toolbar className="mb-4" left={leftToolbarTemplate} ></Toolbar>

                <DataTable ref={dt} value={roles} selection={selectedRoles} onSelectionChange={(e) => setSelectedRoles(e.value)}
                        dataKey="id"  paginator rows={2} rowsPerPageOptions={[2,4,6,8]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                         globalFilter={globalFilter} header={header}>
                    <Column selectionMode="multiple" exportable={false}></Column>
                    <Column field="id" header="" style={{ minWidth: '5rem' }}></Column>
                    <Column field="nom" header="Poste" style={{ minWidth: '8rem' }}></Column>
                    <Column field="description" header="Description" style={{ minWidth: '18rem' }} ></Column>
                    <Column header="Action" body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column>
                </DataTable>
            </div>

            <Dialog visible={roleDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Role" modal className="p-fluid" footer={roleDialogFooter} onHide={hideDialog}>

                <div className="field">
                    <label htmlFor="name" className="font-bold">
                        Nom
                    </label>
                    <InputText id="nom" value={role.nom} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !role.nom })} />
                    {submitted && !role.nom && <small className="p-error">Le nom du role est requis.</small>}
                </div>
                <div className="field">
                    <label htmlFor="description" className="font-bold">
                        Description
                    </label>
                    <InputTextarea id="description" value={role.description} onChange={(e) => onInputChange(e, 'description')} required rows={3} cols={20} />
                </div>

            </Dialog>

            <Dialog visible={deleteRoleDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Attention !!!" modal footer={deleteRoleDialogFooter} onHide={hideDeleteRoleDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {role && (
                        <span>
                            Etes-vous sûr(e) de vouloir supprimer le role de <b>{role.nom}</b> ?
                        </span>
                    )}
                </div>
            </Dialog>

            <Dialog visible={deleteRolesDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteRolesDialogFooter} onHide={hideDeleteRolesDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {role && <span>Etes-vous de vouloir supprimer les roles sélectionnés ?</span>}
                </div>
            </Dialog>
                </div>
                   
                </div>

            </div>
        </div>
         </div>
     )
}


