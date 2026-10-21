import{
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('veiculo')
export class Veiculo {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 50 })
    marca!: string;

    @Column({ length: 100 })
    modelo!: string;

    @Column({ length: 7, unique: true })
    placa!: string;

    @Column({ type: 'int' })
    ano!: number;

    @Column({ type: 'decimal', precision: 10, scale: 2})
    valorDiarial!: number;

    @Column({ default: true})
    disponivel!: boolean;
}