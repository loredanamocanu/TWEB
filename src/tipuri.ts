export interface Produs {
    nume: string;
    brand: string;
    pret: number;
    imagine?: string; // Imaginea este acum opțională
    categorie: string;
    descriere: string;
}


export interface ProdusExtins extends Produs {
    stoc: number;
    rating: number;
}
