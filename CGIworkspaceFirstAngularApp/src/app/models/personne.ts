
export class Personne {
    private _Email: string; 
    public get Email(): string {
        return this._Email;
    }
    public set Email(value: string) {
        this._Email = value;
    }


    private _Nom: string; 
    public get Nom(): string {
        return this._Nom;
    }
    public set Nom(value: string) {
        this._Nom = value;
    }


    private _Prenom: string; 
    public get Prenom(): string {
        return this._Prenom;
    }
    public set Prenom(value: string) {
        this._Prenom = value;
    }


    private _Password: string; 
    public get Password(): string {
        return this._Password;
    }
    public set Password(value: string) {
        this._Password = value;
    }


    private _Date: string;
    public get Date(): string {
        return this._Date;
    }
    public set Date(value: string) {
        this._Date = value;
    }
    private _Profil: string;
    public get Profil(): string {
        return this._Profil;
    }
    public set Profil(value: string) {
        this._Profil = value;
    }

    
  

}
