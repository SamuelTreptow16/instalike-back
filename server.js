import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Primeira foto",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Primeira foto de um gatinho fofo",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        descricao: "Um gatinho brincando com um novelo de lã",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 4,
        descricao: "Gatinho dormindo em uma caixa de papelão",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 5,
        descricao: "Um gatinho olhando pela janela",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 6,
        descricao: "Gatinhos brincando juntos",
        imagem: "https://placecats.com/millie/300/150",
    }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

//Retorna todo o array
app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id);
    res.status(200).json(posts[index]);
})