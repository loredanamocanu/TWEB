import { makeAutoObservable } from 'mobx';
import { Produs, ProdusExtins } from './tipuri';

class ProductStore {
    products: { laptopuri: Produs[], telefoane: Produs[], camereFoto: Produs[] } = {
        laptopuri: [
            { nume: 'Laptop Dell Vostro 3520', brand: 'Dell', pret: 500, categorie: '', descriere: '', imagine: 'https://www.smart.md/image/cache/data/results-photos/emag0111/Laptop-Dell-Vostro-3520-cu-procesor-Intel-Core-i7-1255U-pana-la-4-7-GHz-15-6-Full-HD-120Hz-8GB-DDR4-_9-335x335.jpg' },
            { nume: 'Laptop ASUS VivoBook 16X K3605VC', brand: 'ASUS', pret: 1000, categorie: '', descriere: '', imagine: 'https://www.smart.md/image/cache/data/results-photos/emag2702/Laptop-ASUS-VivoBook-16X-K3605VC-cu-procesor-IntelCore-i9-13900H-pana-la-5-40-GHz-16-WUXGA-16GB-1TB--335x335.jpg' },
            { nume: 'Lenovo ThinkBook 16 G4+ IAP Arctic Grey - 16', brand: 'Lenovo', pret: 899, categorie: '', descriere: '', imagine: 'https://www.smart.md/image/cache/data/image_Calin/15-335x335.jpg' }
        ],
        telefoane: [
            { nume: 'Apple iPhone 13 128GB', brand: 'Apple', pret: 699, categorie: '', descriere: '', imagine: 'https://www.smart.md/image/cache/data/results-photos/smartgsm/iphone-13-dual-sim-esim-128gb-5g-negru-midnight-6gb-ram_10074484_3_1631707823-335x335.jpg' },
            { nume: 'Samsung Galaxy S21 FE G990 5G Dual Sim 6', brand: 'Samsung', pret: 400, categorie: '', descriere: '', imagine: 'https://www.smart.md/image/cache/data/results-photos/smartgsm/Samsung-Galaxy-S21-FE-G990-5G-Dual-Sim-6128GB-White-335x335.jpg' },
            { nume: 'Xiaomi 14 Ultra 5G Dual Sim 16', brand: 'Xiaomi', pret: 1200, categorie: '', descriere: '', imagine: 'https://www.smart.md/image/cache/data/results-photos/smartgsm/Xiaomi-14-Ultra-5G-Dual-Sim-16512GB-Black-335x335.jpg' }
        ],
        camereFoto: [
            { nume: 'Aparat foto DSLR Canon EOS 90D ', brand: 'Canon', pret: 1500, categorie: '', descriere: '', imagine: 'https://www.smart.md/image/cache/data/results-photos/emag1/res_aa20259a30e4b5fc75b3f89e6585bb59_450x450_546m-335x335.jpg' },
            { nume: 'Aparat foto mirrorless Sony Alpha A7C', brand: 'Sony', pret: 2300, categorie: '', descriere: '', imagine: 'https://www.smart.md/image/cache/data/results-photos/emag0612/Aparat-foto-mirrorless-Sony-Alpha-A7C-II-33MP-Full-Frame-Hibrid-4K-Body-Negru-335x335.jpg' },
            { nume: 'Aparat Foto DSLR Nikon D7500', brand: 'Nikon', pret: 1100, categorie: '', descriere: '', imagine: 'https://i.simpalsmedia.com/thumbor/500x0/i.simpalsmedia.com/marketplace/products/original/44d49d489ec530bf575293438c9cd6eb.jpg' }
        ]
    };
    selectedCategory: string = '1';
    formData: { productName: string; productBrand: string; productPrice: string } = {
        productName: '',
        productBrand: '',
        productPrice: ''
    };

    constructor() {
        makeAutoObservable(this);
    }

    setSelectedCategory(category: string) {
        this.selectedCategory = category;
    }

    setFormData(field: string, value: string) {
        this.formData = { ...this.formData, [field]: value };
    }

    addProduct(product: { categorie: string; stoc: number; pret: number; descriere: string; rating: number; nume: string; brand: string }) {
        const categoryKey = this.getCategoryKey();
        this.products[categoryKey].push(product);
    }

    // @ts-ignore
    getCategoryKey(): keyof typeof this.products {
        switch (this.selectedCategory) {
            case '1': return 'laptopuri';
            case '2': return 'telefoane';
            case '3': return 'camereFoto';
            default: return 'laptopuri';
        }
    }
}

const store = new ProductStore();
export default store;