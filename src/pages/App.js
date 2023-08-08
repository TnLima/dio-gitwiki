import gitLogo from '../assets/github.png'
import { Container } from './styles';
import Input from './../components/Input/index';
import ItemRepo from './../components/ItemRepo/index';
import { useState } from 'react';
import Button from '../components/Button';
import { api } from './../services/api';
function App() {

  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([]);

  //ação do botão buscar
  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`)

    if (data.id) {

      const isExist = repos.find(repo => repo.id === data.id)

      if (!isExist) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('')
        return
      }

    }
    alert('Repositório não encontrado ou repetido')
  }

  const handleRemoveRepo = (id) => {
    const filteredRepo = repos.filter(repo => repo.id !== id);
    setRepos(filteredRepo);
  }

  return (
    <Container className="App">
      <img src={gitLogo} alt="github-logo" id='gitLogo' />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
    </Container>
  );
}

export default App;
