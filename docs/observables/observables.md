# 1. Promise vs Observable

## Promise
- Trabajan con un único flujo de datos
- Devuelven un único valor asíncrono
- No se pueden cancelar

```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('ok'), 250);
});

myPromise.then(result => {
  console.log(result);
})
```
<br>

## Observables

- Trabajan con un flujo continuo de datos, que puede ser infinito
- Se puede cancelar la suscripción
- Cuando fallan se pueden reintentar

<br>

# 2. Observables Cold vs Hot
---

| Cold          | Hot        |
| --            | --         |
| Por defecto   |            |
| Punto a Punto | Multicast  |
| Un productor por consumidor | Un productor multiples consumidores |
| El productor empieza después de una suscripción| El productor empieza sin suscripciones|

<br>

# 3. Crear un observable

Se pueden crear los observables usando el constructor

```ts
    import { Observable } from 'rxjs';

    const observable = new Observable(subsriber => {
      subsriber.next(1);
      subsriber.next(2);
      subsriber.next(3);

      setTimeout(() => {
        subsriber.next(4);
        subsriber.complete();
      }, 1000);
    });
```
- No se invoca el observable hasta que nos suscribamos.

<br>

Suscripción

``` ts
observable.subscribe(
  (data) => { console.log('Valor recibido', data); },
  (err) => { console.error('Error', err); },
  () => console.log('completed')
);
```
- Si hay un error no se emiten más valores, ni se completa

<br>


# 4. Ejemplos típicos de observer.

Normalmente no se utiliza el constructor para crear observables.
Se utilizan fuentes externas u operadores de creación de observables.

<br>

``` ts
// Subscribirte a los cambios de un formulario
form.valueChanges.suscribe(value => {});

// Emite un valor cada segundo: 1, 2, ...
Observable.interval(1000).suscribe(() => {});

// Llamada al API
const getUser = this.http.get(url, params);
getUser(id).susbribe(user => {});

// Cambio en los parámetros de la ruta (Angular Router)
this.route.params.subscribe(params => {})

```

# 5. Operadores

- Es aplicar el mismo concepto de la programación funcional
  - `Array.map()`
  - `Array.filter()`

<br>

``` ts
// Los operadores son funciones que aplicamos al valor emitido
const myObs = Observable.pipe(
  map(x => x * 10),
  filter(x => x < 100)
);

// Recibimos valores despues de aplicar todas las funciones
myObs.suscribe(value => {});
```
<br>

# Subject

Es un tipo especial de Observable que comparte una única emisión con multiples observadores.

Se usan habitualmente 2 variantes
- `Subject`: No hay valor inicial
- `BehaviorSubject`: Requiere un valor inicial y emite el valor actual a los nuevos suscriptores.

Es a la vez observable y observador.

```ts
    const subject = new Subject();

    subject.subscribe(
      (value) => console.log('Observer A: ', value)
    );

    subject.subscribe(
      (value) => console.log('Observer B: ', value)
    );

    subject.next(1);
    subject.next(2);
    subject.complete();

    // Observer A: 1
    // Observer B: 1
    // Observer A: 2
    // Observer B: 2
```
<br>
