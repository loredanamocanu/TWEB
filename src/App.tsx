import React from 'react';
// @ts-ignore
import { BrowserRouter as Router, Link, Route, Switch, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Layout, Menu, Card } from 'antd';
import { LaptopOutlined, MobileOutlined, CameraOutlined } from '@ant-design/icons';
import { useStore } from './useStore';

const { Header, Content, Footer, Sider } = Layout;

const Home = () => (
    <div>
        <h2>Home</h2>
        {/* Aici poți afișa componentele specifice paginii de acasă */}
    </div>
);

const Products = observer(() => {
    const store = useStore();
    const { category } = useParams();

    const renderProducts = () => {
        const categoryKey = store.getCategoryKey();
        // @ts-ignore
        return store.products[category || categoryKey].map((product, index) => (
            <Card key={index} style={{ width: 450, marginRight: 20 }}>
                <img alt={product.nume} src={product.imagine} style={{ width: '100%', height: 'auto', marginBottom: 15 }} />
                <div style={{ padding: '16px 0' }}>
                    <h3>{product.nume}</h3>
                    <p><strong>Brand:</strong> {product.brand}</p>
                    <p><strong>Preț:</strong> ${product.pret}</p>
                </div>
            </Card>
        ));
    };

    return (
        <div>
            <h2>Products</h2>
            <div style={{ padding: 24, minHeight: 360, display: 'flex', overflowX: 'auto' }}>
                {renderProducts()}
            </div>
        </div>
    );
});

const About = () => (
    <div>
        <h2>About</h2>
        {/* Aici poți afișa componentele specifice paginii Despre */}
    </div>
);

const MenuComponent = () => {
    const store = useStore();

    return (
        <Sider collapsible>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onSelect={e => store.setSelectedCategory(e.key)}>
                <Menu.Item key="1" icon={<LaptopOutlined />}>
                    <Router>
                        {/* eslint-disable-next-line react/jsx-no-undef */}
                        <Link to="/">Home</Link>
                    </Router>
                </Menu.Item>
                <Menu.Item key="2" icon={<MobileOutlined />}>
                    <Router>
                        <Link to="/products">Products</Link>
                    </Router>
                </Menu.Item>
                <Menu.Item key="3" icon={<CameraOutlined />}>
                    <Router>
                        <Link to="/about">About</Link>
                    </Router>
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

const App = observer(() => {
    // @ts-ignore
    // @ts-ignore
    return (
        <Router>
            <Layout style={{ minHeight: '100vh' }}>
                <MenuComponent />
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <Switch>
                                <Route path="/:category(products|about)" Component={Products} />
                                <Route path="/about" Component={About} />
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Gadget Store ©{new Date().getFullYear()}</Footer>
                </Layout>
            </Layout>
        </Router>
    );
});

export default App;
