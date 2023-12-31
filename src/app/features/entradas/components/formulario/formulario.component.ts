import { Component, OnInit } from "@angular/core";
import { Categoria } from "src/app/features/categorias/models/categoria.model";
import { CategoriaService } from "../../../categorias/service/categoria.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { EntradasService } from "../../service/entradas.service";
import * as dayjs from "dayjs";
import { Entrada } from "../../models/entrada.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.scss"],
})
export class FormularioComponent implements OnInit {
  tiposDeEntradas = ["receita", "despesa"];

  statusDePagamento = [
    { value: true, descricao: "Pago" },
    { value: false, descricao: "Pendente" },
  ];

  categorias: Categoria[] = [];
  // inicializando formulario de entrada para editar e criar
  formEntradas!: FormGroup;
  rota: string = "";
  id: string = "";
  entrada!: Entrada;
  estaCriando: boolean = false;
  //toda vez que usamos $ depois da variavel
  //estamos setando um observable
  categorias$ = this.categoriaService.getCategorias();
  data: any;

  // [injecao de dependencias] utilizando servico de outro modulo
  constructor(
    private readonly categoriaService: CategoriaService,
    private readonly entradaService: EntradasService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.criarFormulario();
    // this.buscarCategorias();

    this.rota = this.activatedRoute.snapshot.url[0].path;

    if (this.rota === "editar") {
      this.id = this.activatedRoute.snapshot.url[1].path;

      this.buscarEntradaPeloId();
    }else{
      this.estaCriando = true;
    }
  }
//toda vez que fizemos uma subinscricao como essa 
//temos que usar o unbscribe  --> iremos utilizar o mais usual ngOnDestroy
  buscarEntradaPeloId() {
    this.entradaService
      .getEntradasPeloId(+this.id)
      .subscribe((entrada: Entrada) => {
        this.entrada = entrada;

        const data = this.entrada.data.split('-'); 
        // const data = this.entrada.data.split("/");

        this.formEntradas.controls["nome"].setValue(this.entrada.nome);
        this.formEntradas.controls["valor"].setValue(this.entrada.valor);
        this.formEntradas.controls["categoriaId"].setValue(
          this.entrada.categoriaId
        );
        this.formEntradas.controls["pago"].setValue(this.entrada.pago);
        this.formEntradas.controls["tipo"].setValue(this.entrada.tipo);
        this.formEntradas.controls["data"].setValue(
          new Date(+data[2], +data[1] -1, +data[0])
        );
      });

      console.log(this.data);
  }

  // buscarCategorias() {
  //   this.categoriaService
  //     .getCategorias()
  //     .subscribe((categorias: Categoria[]) => {
  //       this.categorias = categorias;
  //     });
  // }

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

  salvarEntrada() {
    //utilizando dayjs para formatar data
    const data = dayjs(this.formEntradas.controls["data"].value).format(
      "DD-MM-YYYY"
    );

    const payloadRequest: Entrada = Object.assign(
      "",
      this.formEntradas.getRawValue()
    );

    payloadRequest.data = data;

    const payload: Entrada = {
      nome: payloadRequest.nome,
      categoriaId: payloadRequest.categoriaId,
      data: payloadRequest.data,
      pago: payloadRequest.pago,
      tipo: payloadRequest.tipo,
      valor: payloadRequest.valor,
    };

    if (this.estaCriando) {
      this.criarNovaEntrada(payload);
    } else {
      payload.id = this.entrada.id;
      this.editarEntrada(payload);
    }
  }

  criarNovaEntrada(payload: Entrada) {
    this.entradaService.criarEntrada(payload).subscribe((reposta) => {
      console.log("ok");
      this.redirecionar();
    });
  }

  editarEntrada(payload: Entrada) {
    this.entradaService.editarEntrada(payload).subscribe((reposta) => {
      console.log("ok");
      this.redirecionar();
    });
  }

  redirecionar() {
    this.router.navigate(["entradas"]);
  }

  ngOnDestroy(){
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
  }
}
