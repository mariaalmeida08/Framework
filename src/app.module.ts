import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aluno } from './alunos/aluno.entity.js';
import { Evento } from './evento/evento.entity.js';
import { Livro } from './livro/livro.entity.js';
import { Modalidade } from './modalidade/modalidade.entity.js';
import { Produto } from './produtos/produtos.entity.js';
import { Veiculo } from './veiculo/veiculo.entity.js';

@Module ({
  imports: [
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '12345678',
    database:'escola_db2',
    entities:[Aluno, Evento, Livro, Modalidade, Produto, Veiculo], 
    synchronize: true,
    logging: true,
  }),
  ],
})
export class AppModule {}