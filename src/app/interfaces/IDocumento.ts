import { IUtente } from "./IUtente";

export interface IDocumento {
    idDocumento:string;
    titolo:string;
    file:string;
    firma:string;
    utenti:Array<IUtente>;
}