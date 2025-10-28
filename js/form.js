
//class contato

class Contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.email = email;
      this.cpf = cpf;
      this.telefone = telefone;
      this.contato = contato;
    }
  }
  
  function Post(event, form) {
    event.preventDefault(); // impede recarregar a página
  
    const data = new Contato(
      form.nome.value,
      form.sobrenome.value,
      form.email.value,
      form.cpf.value,
      form.telefone.value,
      form.contato.value
    );
  
    Enviar(data);
  }
  
  function Enviar(contato) {
    if (contato.nome.trim() !== "") {
      alert(`Obrigado(a) ${contato.nome}, seus dados foram enviados com sucesso!`);
  
      // 👉 Mostra os dados no console
      console.log("Dados enviados:", contato);
    } else {
      alert("Por favor, preencha o nome.");
    }
  }
  // Habilitar botão apenas se aceitar os termos
document.addEventListener("DOMContentLoaded", () => {
  const agree = document.getElementById("agreeTerms");
  const submitBtn = document.querySelector("button[type='submit']");

  if (agree && submitBtn) {
    submitBtn.disabled = true;

    agree.addEventListener("change", () => {
      submitBtn.disabled = !agree.checked;
    });
  }
});

  
  