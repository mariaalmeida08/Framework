import{
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('produto')
export class Produto {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 100 })
    nome!: string;

    @Column({ length: 255 })
    descricao!: string;

    @Column({ type: 'decimal', precision: 10, scale: 2  })
    preco!: string;

    @Column({ type: 'int', default: 0 })
    quantidade!: number;

    @Column({ default: true})
    ativo!: boolean;
}