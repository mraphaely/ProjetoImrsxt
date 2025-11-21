import { useEffect, useState } from "react";
import axios from "axios";
import {
  PageContainer,
  SectionForm,
  SectionProdutos,
  Title,
  FormGroup,
  Label,
  Input,
  CheckboxGroup,
  BtnAdd,
  BtnClear,
  ProdutoList,
  ProdutoCard,
  ProdutoInfo,
  ProdutoActions,
  BtnEditar,
  BtnExcluir,
} from "../Styles/GerenciarCardapio";
import { useNavigate } from "react-router-dom";


const GerenciarCardapio = () => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [disponivel, setDisponivel] = useState(true);
  const [imagem, setImagem] = useState(null);
  const [produtos, setProdutos] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  //const navigate = useNavigate();

  //Proteção da rota
 /* useEffect(() => {
   const token = localStorage.getItem("tokenAdmin");
    if (!token) navigate("/login");
    else fetchProdutos();
  }, []);*/

  const fetchProdutos = async () => {
    try {
      const res = await axios.get("http://localhost:3333/produtos");
      setProdutos(res.data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  const handleUpload = (e) => {
    setImagem(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("preco", preco);
    formData.append("disponivel", disponivel);
    if (imagem) formData.append("imagem", imagem);

    try {
      if (editandoId) {
        await axios.put(`http://localhost:3333/produtos/${editandoId}`, formData);
      } else {
        await axios.post("http://localhost:3333/produtos", formData);
      }
      setNome("");
      setPreco("");
      setImagem(null);
      setDisponivel(true);
      setEditandoId(null);
      fetchProdutos();
    } catch (error) {
      console.error("Erro ao salvar produto:", error);
    }
  };

  const handleEditar = (produto) => {
    setEditandoId(produto.id);
    setNome(produto.nome);
    setPreco(produto.preco);
    setDisponivel(produto.disponivel);
  };

  const handleExcluir = async (id) => {
    if (!window.confirm("Deseja realmente excluir este produto?")) return;
    try {
      await axios.delete(`http://localhost:3333/produtos/${id}`);
      fetchProdutos();
    } catch (error) {
      console.error("Erro ao excluir produto:", error);
    }
  };

  const handleLimpar = () => {
    setNome("");
    setPreco("");
    setImagem(null);
    setDisponivel(true);
    setEditandoId(null);
  };

  return (
    <>

     <PageContainer>
      <Title>Gerenciamento de Cardápio</Title>
      <div className="grid">
        <SectionForm>
          <h3>Adicionar / Editar produto</h3>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Nome do produto</Label>
              <Input
                type="text"
                placeholder="Churro crocante recheado com brigadeiro"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Preço (R$)</Label>
              <Input
                type="number"
                step="0.01"
                placeholder="R$ 15,00"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Upload da Imagem</Label>
              <Input type="file" accept="image/*" onChange={handleUpload} />
            </FormGroup>

            <CheckboxGroup>
              <input
                type="checkbox"
                checked={disponivel}
                onChange={(e) => setDisponivel(e.target.checked)}
              />
              <span>Disponível</span>
            </CheckboxGroup>

            <div className="btns">
              <BtnAdd type="submit">
                {editandoId ? "Salvar Alterações" : "Adicionar Produto"}
              </BtnAdd>
              <BtnClear type="button" onClick={handleLimpar}>
                Limpar
              </BtnClear>
            </div>
          </form>
        </SectionForm>

        <SectionProdutos>
          <h3>Produtos Cadastrados</h3>
          <ProdutoList>
            {produtos.map((p) => (
              <ProdutoCard key={p.id}>
                <img src={p.imagem_url} alt={p.nome} />
                <ProdutoInfo>
                  <h4>{p.nome}</h4>
                  <p>R$ {parseFloat(p.preco).toFixed(2)}</p>
                  <span>{p.disponivel ? "Disponível" : "Indisponível"}</span>
                </ProdutoInfo>
                <ProdutoActions>
                  <BtnEditar onClick={() => handleEditar(p)}>Editar</BtnEditar>
                  <BtnExcluir onClick={() => handleExcluir(p.id)}>Excluir</BtnExcluir>
                </ProdutoActions>
              </ProdutoCard>
            ))}
          </ProdutoList>
        </SectionProdutos>
      </div>
    </PageContainer>
    </>
  );
};

export default GerenciarCardapio;
