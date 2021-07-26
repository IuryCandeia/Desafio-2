import React from "react";
import Modal from "react-modal";
import { Container } from "../Home/style";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    border: "2px solid",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#3dc0f0",
    width: 450,
    height: 450,
  },
};

export default function App() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalIsOpen2, setIsOpen2] = React.useState(false);

  let state: { [name: string]: string } = {
     }

  function updateInput(event: any){
    let name : string = event.target.name
    state[name] = event.target.value
    
    }

  function handleSubmit(event: any) {
    console.log(state)
    console.log(event.target);
    event.preventDefault();
    window.localStorage.setItem(state.name, JSON.stringify(state))
  }

  function openClient() {
    setIsOpen(true);
  }

  function closeClient() {
    setIsOpen(false);
  }

  function openProduct() {
    setIsOpen2(true);
  }

  function closeProduct() {
    setIsOpen2(false);
  }

  return (
    <Container>
      <div>
        <header className="header">
          <h1>Sistema de cadastro</h1>
          <h2>E-Commerce</h2>
        </header>
      </div>
      <section>
        <div>
          <div>
            <div className="buttonPosition1" id="renderForm">
              <button className="myButton" onClick={openClient}>
                Cadastrar cliente
              </button>
            </div>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeClient}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h2>Cadastro de cliente</h2>

              <form onSubmit={handleSubmit}>
                <h2>Novo cadastro</h2>
                  <div>
                    <label className="form-label">Nome</label>
                    <br />
                    <input
                      className="form-input"
                      type="nome"
                      id="nome"
                      name="name"
                      placeholder="  Nome"
                      onChange={updateInput}
                    />

                    <br />
                  </div>
                  <div>
                    <label className="form-label">E-mail</label>
                    <input
                      className="form-input"
                      type="text"
                      id="email"
                      name="email"
                      placeholder="  example@email.com"
                      onChange={updateInput}
                    />
                  </div>
                  <div>
                    <label className="form-label">Endereço</label>
                    <input
                      className="form-input"
                      type="text"
                      id="endereco"
                      name="endereco"
                      placeholder="  Endereço"
                      onChange={updateInput}
                    />
                  </div>

                <button className="myButtonModal" type="submit">
                  Enviar
                </button>
              </form>
              <button className="myButtonModal" onClick={closeClient}>
                Fechar
              </button>
            </Modal>
            <div className="buttonPosition2" id="renderForm">
              <button className="myButton" onClick={openProduct}>
                Cadastrar produto
              </button>
            </div>
            <Modal
              isOpen={modalIsOpen2}
              onRequestClose={closeProduct}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h2>Cadastro de produto</h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <label className="form-label">Nome</label>
                  <br />
                  <input
                    className="form-input"
                    name="Nome"
                    type="text"
                    id="produtoNome"
                    placeholder="  Nome do produto"
                    onChange={updateInput}
                  />
                  <br />
                </div>
                <div>
                  <label className="form-label">Preço</label>
                  <input
                    className="form-input"
                    name="preço"
                    type="text"
                    id="preco"
                    placeholder="  Preço do produto"
                    onChange={updateInput}
                  />
                </div>
                <div>
                  <label className="form-label">Foto</label>
                  <input
                    className="form-input"
                    name="Foto"
                    type="text"
                    id="foto"
                    placeholder="  Url da foto do produto"
                    onChange={updateInput}
                  />
                </div>
                <div>
                  <label className="form-label">Descrição</label>
                  <input
                    className="form-input"
                    name="descriçao"
                    type="text"
                    id="description"
                    placeholder="  Descrição do produto"
                    onChange={updateInput}
                  />
                </div>
                <div>
                  <button className="myButtonModal" type="submit">
                    Enviar
                  </button>
                </div>
              </form>
              <div>
                <button className="myButtonModal" onClick={closeProduct}>
                  Fechar
                </button>
              </div>
            </Modal>
          </div>
        </div>
      </section>
      <footer>
        <h3>Desenvolvido por Iury Candeia</h3>
      </footer>
      <script src="../../../src/js/script.js"></script>
    </Container>
  );
}
