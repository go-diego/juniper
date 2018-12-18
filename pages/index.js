import MainLayout from "../containers/MainLayout";

import "../styles/site.scss";

const Home = () => (
    <MainLayout>
        <section className="section container">
            <h1 className="title">Hello World</h1>
            <p>List of tutorials should go here. Emphasis on the newest one.</p>
        </section>
    </MainLayout>
);

export default Home;
