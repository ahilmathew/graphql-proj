import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
  } from 'typeorm'
  
  @Entity()
  export class Employee extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
  
    @Column()
    name: string
  
    @Column()
    email: string
  
    @Column()
    phone: number

    @Column()
    address: string
  }