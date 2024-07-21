package com.onsafety.teste_safety.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.onsafety.teste_safety.models.Pessoa;
import com.onsafety.teste_safety.services.PessoaService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/pessoas")
public class PessoaController {
    
    @Autowired
    private PessoaService pessoaService;

    @PostMapping
    public Pessoa creatPessoa(@RequestBody Pessoa pessoa) {
        return pessoaService.savePessoa(pessoa);
    }

    @GetMapping("/api/pessoas")
    public List<Pessoa> getAllPessoas(){
        return pessoaService.fetchAllPessoas();
    }

}
