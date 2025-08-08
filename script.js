  const birthInput = document.getElementById('birthdate');
  const out = document.getElementById('idadePrecisa');

  function calcularIdadePorData(dateString) {
    if (!dateString) {
      out.textContent = '';
      return null;
    }
    const hoje = new Date();
    const nasc = new Date(dateString);
    let idade = hoje.getFullYear() - nasc.getFullYear();
    const mesDiff = hoje.getMonth() - nasc.getMonth();
    if (mesDiff < 0 || (mesDiff === 0 && hoje.getDate() < nasc.getDate())) {
      idade--; // ainda não fez aniversário neste ano
    }
    if (idade < 0) {
      out.textContent = 'Data inválida (futuro)';
      return null;
    }
    out.textContent = idade + ' anos';
    return idade;
  }

  // atualiza enquanto o usuário escolhe a data
  birthInput.addEventListener('input', (e) => calcularIdadePorData(e.target.value));