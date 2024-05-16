import React, { useState } from 'react';
import { Layout, Menu, Card, Form, Input, Button } from 'antd';
import { LaptopOutlined, MobileOutlined, CameraOutlined } from '@ant-design/icons';
import { Produs, ProdusExtins } from './tipuri'; // Importă interfețele Produs și ProdusExtins

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
    const [productName, setProductName] = useState('');
    const [productBrand, setProductBrand] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const handleAddToCart = () => {
        // Creează un obiect constant (const) folosind interfața ProdusExtins
        const productData: ProdusExtins = {
            nume: productName,
            brand: productBrand,
            pret: parseFloat(productPrice), // Convertim la număr
            categorie: '',
            descriere: '',
            stoc: 10, // Exemplu de utilizare a unui câmp din ProdusExtins
            rating: 4.5 // Exemplu de utilizare a unui câmp din ProdusExtins
        };
        console.log('Product added to cart:', productData);
        alert('Produsul a fost adăugat în coș!');
    };

    // Definirea datelor pentru fiecare categorie
    const laptopuri = [
        { nume: 'Laptop Dell Vostro 3520', brand: 'Dell', pret: 500, imagine: 'https://www.smart.md/image/cache/data/results-photos/emag0111/Laptop-Dell-Vostro-3520-cu-procesor-Intel-Core-i7-1255U-pana-la-4-7-GHz-15-6-Full-HD-120Hz-8GB-DDR4-_9-335x335.jpg' },
        { nume: 'Laptop ASUS VivoBook 16X K3605VC', brand: 'ASUS', pret: 1000, imagine: 'https://www.smart.md/image/cache/data/results-photos/emag2702/Laptop-ASUS-VivoBook-16X-K3605VC-cu-procesor-IntelCore-i9-13900H-pana-la-5-40-GHz-16-WUXGA-16GB-1TB--335x335.jpg' },
        { nume: 'Lenovo ThinkBook 16 G4+ IAP Arctic Grey - 16', brand: 'Lenovo', pret: 899, imagine: 'https://www.smart.md/image/cache/data/image_Calin/15-335x335.jpg' }
    ];

    const telefoane = [
        { nume: 'Apple iPhone 13 128GB', brand: 'Apple', pret: 699, imagine: 'https://www.smart.md/image/cache/data/results-photos/smartgsm/iphone-13-dual-sim-esim-128gb-5g-negru-midnight-6gb-ram_10074484_3_1631707823-335x335.jpg' },
        { nume: 'Samsung Galaxy S21 FE G990 5G Dual Sim 6', brand: 'Samsung', pret: 400, imagine: 'https://www.smart.md/image/cache/data/results-photos/smartgsm/Samsung-Galaxy-S21-FE-G990-5G-Dual-Sim-6128GB-White-335x335.jpg' },
        { nume: 'Xiaomi 14 Ultra 5G Dual Sim 16', brand: 'Xiaomi', pret: 1200, imagine: 'https://www.smart.md/image/cache/data/results-photos/smartgsm/Xiaomi-14-Ultra-5G-Dual-Sim-16512GB-Black-335x335.jpg' }
    ];

    const camereFoto = [
        { nume: 'Aparat foto DSLR Canon EOS 90D ', brand: 'Canon', pret: 1500, imagine: 'https://www.smart.md/image/cache/data/results-photos/emag1/res_aa20259a30e4b5fc75b3f89e6585bb59_450x450_546m-335x335.jpg' },
        { nume: 'Aparat foto mirrorless Sony Alpha A7C', brand: 'Sony', pret: 2300, imagine: 'https://www.smart.md/image/cache/data/results-photos/emag0612/Aparat-foto-mirrorless-Sony-Alpha-A7C-II-33MP-Full-Frame-Hibrid-4K-Body-Negru-335x335.jpg' },
        { nume: 'Aparat Foto DSLR Nikon D7500', brand: 'Nikon', pret: 1100, imagine: 'https://i.simpalsmedia.com/thumbor/500x0/i.simpalsmedia.com/marketplace/products/original/44d49d489ec530bf575293438c9cd6eb.jpg' }
    ];

    // Starea pentru a ține evidența categoriei selectate
    const [selectedCategory, setSelectedCategory] = useState('1');

    // Funcția pentru a schimba categoria selectată
    const handleMenuSelect = (event: { key: React.SetStateAction<string>; }) => {
        setSelectedCategory(event.key);
    };

    // Funcția pentru a returna produsele în funcție de categoria selectată
    const renderProducts = () => {
        switch (selectedCategory) {
            case '1':
                return laptopuri.map((product, index) => (
                    <Card key={index} style={{ width: 450, marginRight: 20 }}>
                        <img alt={product.nume} src={product.imagine} style={{ width: '100%', height: 'auto', marginBottom: 15 }} />
                        <div style={{ padding: '16px 0' }}>
                            <h3>{product.nume}</h3>
                            <p><strong>Brand:</strong> {product.brand}</p>
                            <p><strong>Preț:</strong> ${product.pret}</p>
                        </div>
                    </Card>
                ));
            case '2':
                return telefoane.map((product, index) => (
                    <Card key={index} style={{ width: 450, marginRight: 20 }}>
                        <img alt={product.nume} src={product.imagine} style={{ width: '100%', height: 'auto', marginBottom: 15 }} />
                        <div style={{ padding: '16px 0' }}>
                            <h3>{product.nume}</h3>
                            <p><strong>Brand:</strong> {product.brand}</p>
                            <p><strong>Preț:</strong> ${product.pret}</p>
                        </div>
                    </Card>
                ));
            case '3':
                return camereFoto.map((product, index) => (
                    <Card key={index} style={{ width: 450, marginRight: 20 }}>
                        <img alt={product.nume} src={product.imagine} style={{ width: '100%', height: 'auto', marginBottom: 15 }} />
                        <div style={{ padding: '16px 0' }}>
                            <h3>{product.nume}</h3>
                            <p><strong>Brand:</strong> {product.brand}</p>
                            <p><strong>Preț:</strong> ${product.pret}</p>
                        </div>
                    </Card>
                ));
            default:
                return null;
        }
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onSelect={handleMenuSelect}>
                    <Menu.Item key="1" icon={<LaptopOutlined />}>
                        Laptopuri
                    </Menu.Item>
                    <Menu.Item key="2" icon={<MobileOutlined />}>
                        Telefoane
                    </Menu.Item>
                    <Menu.Item key="3" icon={<CameraOutlined />}>
                        Camere foto
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360, display: 'flex', overflowX: 'auto' }}>
                        {/* Afiseaza produsele pentru categoria selectata */}
                        {renderProducts()}
                    </div>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <Form layout="vertical">
                            <Form.Item label="Nume produs">
                                <Input value={productName} onChange={e => setProductName(e.target.value)} />
                            </Form.Item>
                            <Form.Item label="Brand">
                                <Input value={productBrand} onChange={e => setProductBrand(e.target.value)} />
                            </Form.Item>
                            <Form.Item label="Preț">
                                <Input type="number" value={productPrice} onChange={e => setProductPrice(e.target.value)} />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" onClick={handleAddToCart}>
                                    Adaugă în coș
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Gadget Store ©{new Date().getFullYear()}</Footer>
            </Layout>
        </Layout>
    );
};

export default App;
