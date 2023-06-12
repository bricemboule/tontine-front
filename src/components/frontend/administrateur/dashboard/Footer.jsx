import "admin-lte/plugins/jquery/jquery"
import "admin-lte/plugins/bootstrap/js/bootstrap.bundle"
import "admin-lte/dist/js/adminlte"
import "/public/css/home.css"

export default function Footer(){

    return(
            <div>
                <footer className="main-footer">

                    <div className="float-right d-none d-sm-inline">
                        Tontine
                    </div>
                    <strong>Copyright &copy; 2023 .</strong> Tous droits réservés.
                </footer>

            </div>
    )
}