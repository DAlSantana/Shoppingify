import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/modules/produto/produto.service';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.sass']
})
export class ItensComponent implements OnInit {

  bodyText: string;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
      this.bodyText = 'This text can be updated in modal 1';
  }

  openModal(id: string) {
      this.produtoService.open(id);
  }

  closeModal(id: string) {
      this.produtoService.close(id);
  }

}
