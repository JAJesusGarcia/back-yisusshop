import { DataSource } from 'typeorm';
import { User } from '../entities/User';
import { Credential } from '../entities/Credential';
import { Order } from '../entities/Order';
import { Category } from '../entities/Category';
import { Product } from '../entities/Product';

// export const AppDataSource = new DataSource({
//   type: 'postgres',
//   url: process.env.DATABASE_URL, // Usar DATABASE_URL aquí
//   synchronize: true,
//   logging: false,
//   entities: [User, Credential, Order, Product, Category],
//   subscribers: [],
//   migrations: [],
// });

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL, // Usa la URL completa
  synchronize: true,
  logging: false,
  ssl: true,
  entities: [User, Credential, Order, Product, Category],
});

// export const AppDataSource = new DataSource({
//   type: 'postgres',
//   host: DB_HOST,
//   port: DB_PORT,
//   username: DB_USER,
//   password: DB_PASSWORD,
//   database: DB_NAME,
//   synchronize: true,
// dropSchema: false,
//   logging: false,
//   entities: [User, Credential, Order, Product, Category],
//   subscribers: [],
//   migrations: [],
// });
