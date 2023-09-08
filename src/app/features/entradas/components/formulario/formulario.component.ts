import { Component, OnInit } from "@angular/core";
import { Categoria } from "src/app/features/categorias/models/categoria.model";
import { CategoriaService } from "../../../categorias/service/categoria.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.scss"],
})
export class FormularioComponent implements OnInit {
  tiposDeEntradas = ["Receita", "Despesa"];

  statusDePagamento = [
    { value: true, descricao: "Pago" },
    { value: false, descricao: "Pendente" },
  ];

  categorias: Categoria[] = [];
  // inicializando formulario de entrada para editar e criar
  formEntradas!: FormGroup;

  // [injecao de dependencias] utilizando servico de outro modulo
  constructor(
    private readonly CategoriaService: CategoriaService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.criarFormulario();
    this.buscarCategorias();
  }

  buscarCategorias() {
    this.CategoriaService.getCategorias().subscribe(
      (categorias: Categoria[]) => {
        this.categorias = categorias;
      }
    );
  }

  criarFormulario() {
    this.formEntradas = this.formBuilder.group({
      nome: ["", Validators.required],
      valor: ["", Validators.required],
      categoriaId: ["", Validators.required],
      pago: [true, Validators.required],
      tipo: ["Despesa", Validators.required],
      data: [new Date(), Validators.required],
    });
  }
}
