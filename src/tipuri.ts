// tipuri.ts

// Definirea primei interfețe pentru datele produsului
interface Produs {
    nume: string;
    brand: string;
    pret: number;
    categorie: string;
    descriere: string;
    // Poți adăuga mai multe câmpuri după necesități
}

// Definirea unei a doua interfețe care extinde interfața Produs și adaugă două câmpuri noi
interface ProdusExtins extends Produs {
    stoc: number;
    rating: number;
    // Poți adăuga mai multe câmpuri după necesități
}

export type {
    Produs,
    ProdusExtins
};
