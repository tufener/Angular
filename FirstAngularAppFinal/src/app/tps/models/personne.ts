export class Personne {
    private static Counter : number = 0 ;
    /**
     *
     */
    constructor() {
        Personne.Counter++;
        this.Id = Personne.Counter;
    }
    private _IsCreate: boolean = true;
    public get IsCreate(): boolean {
        return this._IsCreate;
    }
    public set IsCreate(value: boolean) {
        this._IsCreate = value;
    }

    private _Id: number;
    public get Id(): number {
        return this._Id;
    }
    public set Id(value: number) {
        this._Id = value;
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
    private _Email: string;
    public get Email(): string {
        return this._Email;
    }
    public set Email(value: string) {
        this._Email = value;
    }
    private _Password: string;
    public get Password(): string {
        return this._Password;
    }
    public set Password(value: string) {
        this._Password = value;
    }
    private _DateNaissance: Date;
    public get DateNaissance(): Date {
        return this._DateNaissance;
    }
    public set DateNaissance(value: Date) {
        this._DateNaissance = value;
    }
    private _UserProfil: Profil;
    public get UserProfil(): Profil {
        return this._UserProfil;
    }
    public set UserProfil(value: Profil) {
        this._UserProfil = value;
    }

    private _Telephone: string;
    public get Telephone(): string {
        return this._Telephone;
    }
    public set Telephone(value: string) {
        this._Telephone = value;
    }
}

export enum Profil {
    Admin, Etudiant, Commercial
}

export namespace Profil {

    export function values() {
      return Object.keys(Profil).filter(
        (type) => isNaN(<any>type) && type !== 'values'
      );
    }
  }
