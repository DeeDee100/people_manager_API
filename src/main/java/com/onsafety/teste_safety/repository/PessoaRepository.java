package com.onsafety.teste_safety.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.onsafety.teste_safety.models.Pessoa;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {
    
    Optional<Pessoa> findByCpf(String cpf);
}
