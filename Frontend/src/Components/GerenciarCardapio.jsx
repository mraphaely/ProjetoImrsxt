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

const GerenciarCardapio = () => {
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [estoque, setEstoque] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [disponibilidade, setDisponibilidade] = useState(true);
  const [imagem, setImagem] = useState(null);
  const [produtos, setProdutos] = useState([]);
  const [editandoId, setEditandoId] = useState(null);

  // 🔥 Mensagem de erro
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchProdutos();
  }, []);

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

    setErrorMessage(""); 

    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("preco", Number(preco));
    formData.append("categoria", categoria);
    formData.append("estoque", Number(estoque));
    formData.append("descricao", descricao);
    formData.append("disponibilidade", disponibilidade ? "Disponível" : "Indisponível");
    if (imagem) formData.append("imagem", imagem);

    try {
      if (editandoId) {
        await axios.put(`http://localhost:3333/produtos/${editandoId}`, formData);
      } else {
        await axios.post("http://localhost:3333/produtos/", formData);
      }

      handleLimpar();
      fetchProdutos();

    } catch (error) {
      console.error("Erro ao salvar produto:", error);


      let msg =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Erro ao salvar o produto. Verifique os campos e tente novamente.";

      setErrorMessage(msg);
    }
  };

  const handleEditar = (produto) => {
    setEditandoId(produto.id);
    setNome(produto.nome);
    setPreco(produto.preco);
    setCategoria(produto.categoria);
    setEstoque(produto.estoque);
    setDescricao(produto.descricao || "");
    setDisponibilidade(produto.disponibilidade === "Disponível");
  };

  const handleExcluir = async (id) => {
    if (!window.confirm("Deseja realmente excluir este produto?")) return;

    try {
      await axios.delete(`http://localhost:3333/produtos/${id}`);
      fetchProdutos();
    } catch (error) {
      console.error("Erro ao excluir produto:", error);
      setErrorMessage("Erro ao excluir o produto.");
    }
  };

  const handleLimpar = () => {
    setNome("");
    setPreco("");
    setCategoria("");
    setEstoque("");
    setDescricao("");
    setDisponibilidade(true);
    setImagem(null);
    setEditandoId(null);
    setErrorMessage("");
  };

  return (
    <PageContainer>
      <Title>Gerenciamento de Cardápio</Title>

      <div className="grid">
        <SectionForm>
          <h3>Adicionar / Editar produto</h3>

          <form onSubmit={handleSubmit}>

            <FormGroup>
              <Label>Nome do produto</Label>
              <Input value={nome} onChange={(e) => setNome(e.target.value)} required />
            </FormGroup>

            <FormGroup>
              <Label>Categoria</Label>
              <Input value={categoria} onChange={(e) => setCategoria(e.target.value)} required />
            </FormGroup>

            <FormGroup>
              <Label>Preço (R$)</Label>
              <Input type="number" step="0.01" value={preco} onChange={(e) => setPreco(e.target.value)} required />
            </FormGroup>

            <FormGroup>
              <Label>Estoque</Label>
              <Input type="number" value={estoque} onChange={(e) => setEstoque(e.target.value)} required />
            </FormGroup>

            <FormGroup>
              <Label>Descrição</Label>
              <Input value={descricao} onChange={(e) => setDescricao(e.target.value)} />
            </FormGroup>

            <FormGroup>
              <Label>Imagem</Label>
              <Input type="file" accept="image/*" onChange={handleUpload} />
            </FormGroup>

            <CheckboxGroup>
              <input
                type="checkbox"
                checked={disponibilidade}
                onChange={(e) => setDisponibilidade(e.target.checked)}
              />
              <span>Disponível</span>
            </CheckboxGroup>
            {errorMessage && (
            <p style={{ color: "red", marginBottom: "10px", fontWeight: "bold", textAlign: "end"}}>
              {errorMessage}
            </p>
          )}


            <div className="btns">
              <BtnAdd type="submit">
                {editandoId ? "Salvar Alterações" : "Adicionar Produto"}
              </BtnAdd>
              <BtnClear type="button" onClick={handleLimpar}>Limpar</BtnClear>
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
                  <span>{p.disponibilidade}</span>
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
  );
};

export default GerenciarCardapio;
