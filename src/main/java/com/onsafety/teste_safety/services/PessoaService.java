package com.onsafety.teste_safety.services;

import java.util.List;

import com.onsafety.teste_safety.models.Pessoa;

public interface PessoaService {

    Pessoa savePessoa(Pessoa pessoa);

    List<Pessoa> fetchAllPessoas();

    Pessoa getPessoaById(Long id);

    Pessoa updatePessoaById(Long id, Pessoa pessoa);

    String deleteDepartmentById(Long id);
}