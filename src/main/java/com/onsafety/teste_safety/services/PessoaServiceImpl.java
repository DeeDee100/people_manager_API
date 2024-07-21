package com.onsafety.teste_safety.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;
import com.onsafety.teste_safety.models.Pessoa;
import com.onsafety.teste_safety.repository.PessoaRepository;


import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class PessoaServiceImpl implements PessoaService{

    @Autowired
    private PessoaRepository pessoaRepository;

    @Override
    public Pessoa savePessoa(Pessoa pessoa) {
        return pessoaRepository.save(pessoa);
    }

    @Override
    public List<Pessoa> fetchAllPessoas() {
        List<Pessoa> allPessoas = pessoaRepository.findAll();
        return allPessoas;
    }

    @Override
    public Pessoa getPessoaById(Long id) {
        Optional<Pessoa> pessoa = pessoaRepository.findById(id);
        if (pessoa.isPresent()) {
            return pessoa.get();
        }
        return null;
    }


    @Override
    public Pessoa updatePessoaById(Long id, Pessoa pessoa) {
        Optional<Pessoa> pessoaToUpdate = pessoaRepository.findById(id);

        if (pessoaToUpdate.isPresent()) {
            Pessoa originalPessoa = pessoaToUpdate.get();

            if (Objects.nonNull(pessoa.getName()) && !"".equalsIgnoreCase(pessoa.getName())) {
                originalPessoa.setName(pessoa.getName());
            }
            return pessoaRepository.save(originalPessoa);
        }
        return null;
    }

    @Override
    public Pessoa getByCpf(String cpf) {
        Pessoa pessoa = pessoaRepository.findByCpf(cpf).orElseThrow(NoSuchElementException::new);
        return pessoa;
    }

    @Override
    public void deleteById(Long id) {
        pessoaRepository.deleteById(id);
    }

}