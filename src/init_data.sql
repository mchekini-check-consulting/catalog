create table if not exists catalog (

    id BIGINT primary key,
    name varchar,
    category varchar,
    price float
);

delete from catalog;


insert into catalog (id, name, category, price) VALUES ( 1, 'manette PS4', 'Jeux videos', 48.5 );
insert into catalog (id, name, category, price) VALUES ( 2, 'Souris', 'Materiel informatique', 17 );
insert into catalog (id, name, category, price) VALUES ( 3, 'Clavier', 'Materiel informatique', 25.2 );