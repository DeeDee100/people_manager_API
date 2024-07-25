package com.onsafety.teste_safety.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.onsafety.teste_safety.models.Pessoa;
import com.onsafety.teste_safety.services.PessoaService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;




@RestController
@RequestMapping("/api/pessoas")
@CrossOrigin("*")
public class PessoaController {
    
    @Autowired
    private PessoaService pessoaService;

    @PostMapping
    public Pessoa creatPessoa(@RequestBody @Valid Pessoa pessoa) {
        return pessoaService.savePessoa(pessoa);
    }

    @GetMapping
    public List<Pessoa> getAllPessoas(){
        return pessoaService.fetchAllPessoas();
    }

    @GetMapping("/{cpf}")
    public ResponseEntity<Pessoa> getByCpf(@PathVariable String cpf) {
        var pessoa = pessoaService.getByCpf(cpf);
        return ResponseEntity.ok(pessoa);
    }

    @PutMapping("/{id}")
    public Pessoa updatPessoa(@PathVariable Long id, @RequestBody @Valid Pessoa pessoa)  {
        return pessoaService.updatePessoaById(id, pessoa);        
    }

    @DeleteMapping("/{id}")
    public void deletePessoa(@PathVariable Long id) {
        pessoaService.deleteById(id);
    }
}
