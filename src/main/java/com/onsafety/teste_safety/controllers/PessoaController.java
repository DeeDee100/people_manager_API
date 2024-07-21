package com.onsafety.teste_safety.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.onsafety.teste_safety.models.Pessoa;
import com.onsafety.teste_safety.services.PessoaService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

    @GetMapping
    public List<Pessoa> getAllPessoas(){
        return pessoaService.fetchAllPessoas();
    }

    // @GetMapping("/{id}")
    // public ResponseEntity<Pessoa> getById(@PathVariable Long id) {
    //     var pessoa = pessoaService.getPessoaById(id);
    //     return ResponseEntity.ok(pessoa);
    // }

    @GetMapping("/{cpf}")
    public ResponseEntity<Pessoa> getByCpf(@PathVariable String cpf) {
        var pessoa = pessoaService.getByCpf(cpf);
        return ResponseEntity.ok(pessoa);
    }
}
