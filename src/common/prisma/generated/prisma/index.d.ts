
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Restaurants
 * 
 */
export type Restaurants = $Result.DefaultSelection<Prisma.$RestaurantsPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model food_type
 * 
 */
export type food_type = $Result.DefaultSelection<Prisma.$food_typePayload>
/**
 * Model foods
 * 
 */
export type foods = $Result.DefaultSelection<Prisma.$foodsPayload>
/**
 * Model like_res
 * 
 */
export type like_res = $Result.DefaultSelection<Prisma.$like_resPayload>
/**
 * Model orders
 * 
 */
export type orders = $Result.DefaultSelection<Prisma.$ordersPayload>
/**
 * Model rate_res
 * 
 */
export type rate_res = $Result.DefaultSelection<Prisma.$rate_resPayload>
/**
 * Model sub_foods
 * 
 */
export type sub_foods = $Result.DefaultSelection<Prisma.$sub_foodsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Restaurants
 * const restaurants = await prisma.restaurants.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Restaurants
   * const restaurants = await prisma.restaurants.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.restaurants`: Exposes CRUD operations for the **Restaurants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Restaurants
    * const restaurants = await prisma.restaurants.findMany()
    * ```
    */
  get restaurants(): Prisma.RestaurantsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.food_type`: Exposes CRUD operations for the **food_type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Food_types
    * const food_types = await prisma.food_type.findMany()
    * ```
    */
  get food_type(): Prisma.food_typeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.foods`: Exposes CRUD operations for the **foods** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Foods
    * const foods = await prisma.foods.findMany()
    * ```
    */
  get foods(): Prisma.foodsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.like_res`: Exposes CRUD operations for the **like_res** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Like_res
    * const like_res = await prisma.like_res.findMany()
    * ```
    */
  get like_res(): Prisma.like_resDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rate_res`: Exposes CRUD operations for the **rate_res** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rate_res
    * const rate_res = await prisma.rate_res.findMany()
    * ```
    */
  get rate_res(): Prisma.rate_resDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sub_foods`: Exposes CRUD operations for the **sub_foods** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sub_foods
    * const sub_foods = await prisma.sub_foods.findMany()
    * ```
    */
  get sub_foods(): Prisma.sub_foodsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Restaurants: 'Restaurants',
    Users: 'Users',
    food_type: 'food_type',
    foods: 'foods',
    like_res: 'like_res',
    orders: 'orders',
    rate_res: 'rate_res',
    sub_foods: 'sub_foods'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "restaurants" | "users" | "food_type" | "foods" | "like_res" | "orders" | "rate_res" | "sub_foods"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Restaurants: {
        payload: Prisma.$RestaurantsPayload<ExtArgs>
        fields: Prisma.RestaurantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestaurantsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestaurantsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantsPayload>
          }
          findFirst: {
            args: Prisma.RestaurantsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestaurantsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantsPayload>
          }
          findMany: {
            args: Prisma.RestaurantsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantsPayload>[]
          }
          create: {
            args: Prisma.RestaurantsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantsPayload>
          }
          createMany: {
            args: Prisma.RestaurantsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RestaurantsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantsPayload>
          }
          update: {
            args: Prisma.RestaurantsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantsPayload>
          }
          deleteMany: {
            args: Prisma.RestaurantsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestaurantsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RestaurantsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantsPayload>
          }
          aggregate: {
            args: Prisma.RestaurantsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestaurants>
          }
          groupBy: {
            args: Prisma.RestaurantsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestaurantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestaurantsCountArgs<ExtArgs>
            result: $Utils.Optional<RestaurantsCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      food_type: {
        payload: Prisma.$food_typePayload<ExtArgs>
        fields: Prisma.food_typeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.food_typeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$food_typePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.food_typeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$food_typePayload>
          }
          findFirst: {
            args: Prisma.food_typeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$food_typePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.food_typeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$food_typePayload>
          }
          findMany: {
            args: Prisma.food_typeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$food_typePayload>[]
          }
          create: {
            args: Prisma.food_typeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$food_typePayload>
          }
          createMany: {
            args: Prisma.food_typeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.food_typeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$food_typePayload>
          }
          update: {
            args: Prisma.food_typeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$food_typePayload>
          }
          deleteMany: {
            args: Prisma.food_typeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.food_typeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.food_typeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$food_typePayload>
          }
          aggregate: {
            args: Prisma.Food_typeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFood_type>
          }
          groupBy: {
            args: Prisma.food_typeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Food_typeGroupByOutputType>[]
          }
          count: {
            args: Prisma.food_typeCountArgs<ExtArgs>
            result: $Utils.Optional<Food_typeCountAggregateOutputType> | number
          }
        }
      }
      foods: {
        payload: Prisma.$foodsPayload<ExtArgs>
        fields: Prisma.foodsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.foodsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.foodsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodsPayload>
          }
          findFirst: {
            args: Prisma.foodsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.foodsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodsPayload>
          }
          findMany: {
            args: Prisma.foodsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodsPayload>[]
          }
          create: {
            args: Prisma.foodsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodsPayload>
          }
          createMany: {
            args: Prisma.foodsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.foodsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodsPayload>
          }
          update: {
            args: Prisma.foodsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodsPayload>
          }
          deleteMany: {
            args: Prisma.foodsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.foodsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.foodsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodsPayload>
          }
          aggregate: {
            args: Prisma.FoodsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoods>
          }
          groupBy: {
            args: Prisma.foodsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodsGroupByOutputType>[]
          }
          count: {
            args: Prisma.foodsCountArgs<ExtArgs>
            result: $Utils.Optional<FoodsCountAggregateOutputType> | number
          }
        }
      }
      like_res: {
        payload: Prisma.$like_resPayload<ExtArgs>
        fields: Prisma.like_resFieldRefs
        operations: {
          findUnique: {
            args: Prisma.like_resFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$like_resPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.like_resFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$like_resPayload>
          }
          findFirst: {
            args: Prisma.like_resFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$like_resPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.like_resFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$like_resPayload>
          }
          findMany: {
            args: Prisma.like_resFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$like_resPayload>[]
          }
          create: {
            args: Prisma.like_resCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$like_resPayload>
          }
          createMany: {
            args: Prisma.like_resCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.like_resDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$like_resPayload>
          }
          update: {
            args: Prisma.like_resUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$like_resPayload>
          }
          deleteMany: {
            args: Prisma.like_resDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.like_resUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.like_resUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$like_resPayload>
          }
          aggregate: {
            args: Prisma.Like_resAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLike_res>
          }
          groupBy: {
            args: Prisma.like_resGroupByArgs<ExtArgs>
            result: $Utils.Optional<Like_resGroupByOutputType>[]
          }
          count: {
            args: Prisma.like_resCountArgs<ExtArgs>
            result: $Utils.Optional<Like_resCountAggregateOutputType> | number
          }
        }
      }
      orders: {
        payload: Prisma.$ordersPayload<ExtArgs>
        fields: Prisma.ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findFirst: {
            args: Prisma.ordersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findMany: {
            args: Prisma.ordersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          create: {
            args: Prisma.ordersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          createMany: {
            args: Prisma.ordersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ordersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          update: {
            args: Prisma.ordersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          deleteMany: {
            args: Prisma.ordersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ordersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ordersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.ordersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      rate_res: {
        payload: Prisma.$rate_resPayload<ExtArgs>
        fields: Prisma.rate_resFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rate_resFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rate_resPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rate_resFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rate_resPayload>
          }
          findFirst: {
            args: Prisma.rate_resFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rate_resPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rate_resFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rate_resPayload>
          }
          findMany: {
            args: Prisma.rate_resFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rate_resPayload>[]
          }
          create: {
            args: Prisma.rate_resCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rate_resPayload>
          }
          createMany: {
            args: Prisma.rate_resCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.rate_resDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rate_resPayload>
          }
          update: {
            args: Prisma.rate_resUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rate_resPayload>
          }
          deleteMany: {
            args: Prisma.rate_resDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rate_resUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.rate_resUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rate_resPayload>
          }
          aggregate: {
            args: Prisma.Rate_resAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRate_res>
          }
          groupBy: {
            args: Prisma.rate_resGroupByArgs<ExtArgs>
            result: $Utils.Optional<Rate_resGroupByOutputType>[]
          }
          count: {
            args: Prisma.rate_resCountArgs<ExtArgs>
            result: $Utils.Optional<Rate_resCountAggregateOutputType> | number
          }
        }
      }
      sub_foods: {
        payload: Prisma.$sub_foodsPayload<ExtArgs>
        fields: Prisma.sub_foodsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sub_foodsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_foodsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sub_foodsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_foodsPayload>
          }
          findFirst: {
            args: Prisma.sub_foodsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_foodsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sub_foodsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_foodsPayload>
          }
          findMany: {
            args: Prisma.sub_foodsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_foodsPayload>[]
          }
          create: {
            args: Prisma.sub_foodsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_foodsPayload>
          }
          createMany: {
            args: Prisma.sub_foodsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sub_foodsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_foodsPayload>
          }
          update: {
            args: Prisma.sub_foodsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_foodsPayload>
          }
          deleteMany: {
            args: Prisma.sub_foodsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sub_foodsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sub_foodsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_foodsPayload>
          }
          aggregate: {
            args: Prisma.Sub_foodsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSub_foods>
          }
          groupBy: {
            args: Prisma.sub_foodsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sub_foodsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sub_foodsCountArgs<ExtArgs>
            result: $Utils.Optional<Sub_foodsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    restaurants?: RestaurantsOmit
    users?: UsersOmit
    food_type?: food_typeOmit
    foods?: foodsOmit
    like_res?: like_resOmit
    orders?: ordersOmit
    rate_res?: rate_resOmit
    sub_foods?: sub_foodsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RestaurantsCountOutputType
   */

  export type RestaurantsCountOutputType = {
    like_res: number
    rate_res: number
  }

  export type RestaurantsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    like_res?: boolean | RestaurantsCountOutputTypeCountLike_resArgs
    rate_res?: boolean | RestaurantsCountOutputTypeCountRate_resArgs
  }

  // Custom InputTypes
  /**
   * RestaurantsCountOutputType without action
   */
  export type RestaurantsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantsCountOutputType
     */
    select?: RestaurantsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RestaurantsCountOutputType without action
   */
  export type RestaurantsCountOutputTypeCountLike_resArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: like_resWhereInput
  }

  /**
   * RestaurantsCountOutputType without action
   */
  export type RestaurantsCountOutputTypeCountRate_resArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rate_resWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    like_res: number
    orders: number
    rate_res: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    like_res?: boolean | UsersCountOutputTypeCountLike_resArgs
    orders?: boolean | UsersCountOutputTypeCountOrdersArgs
    rate_res?: boolean | UsersCountOutputTypeCountRate_resArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountLike_resArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: like_resWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRate_resArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rate_resWhereInput
  }


  /**
   * Count Type Food_typeCountOutputType
   */

  export type Food_typeCountOutputType = {
    foods: number
  }

  export type Food_typeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foods?: boolean | Food_typeCountOutputTypeCountFoodsArgs
  }

  // Custom InputTypes
  /**
   * Food_typeCountOutputType without action
   */
  export type Food_typeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food_typeCountOutputType
     */
    select?: Food_typeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Food_typeCountOutputType without action
   */
  export type Food_typeCountOutputTypeCountFoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: foodsWhereInput
  }


  /**
   * Count Type FoodsCountOutputType
   */

  export type FoodsCountOutputType = {
    orders: number
    sub_foods: number
  }

  export type FoodsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | FoodsCountOutputTypeCountOrdersArgs
    sub_foods?: boolean | FoodsCountOutputTypeCountSub_foodsArgs
  }

  // Custom InputTypes
  /**
   * FoodsCountOutputType without action
   */
  export type FoodsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodsCountOutputType
     */
    select?: FoodsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoodsCountOutputType without action
   */
  export type FoodsCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }

  /**
   * FoodsCountOutputType without action
   */
  export type FoodsCountOutputTypeCountSub_foodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sub_foodsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Restaurants
   */

  export type AggregateRestaurants = {
    _count: RestaurantsCountAggregateOutputType | null
    _avg: RestaurantsAvgAggregateOutputType | null
    _sum: RestaurantsSumAggregateOutputType | null
    _min: RestaurantsMinAggregateOutputType | null
    _max: RestaurantsMaxAggregateOutputType | null
  }

  export type RestaurantsAvgAggregateOutputType = {
    id: number | null
    deletedBy: number | null
  }

  export type RestaurantsSumAggregateOutputType = {
    id: number | null
    deletedBy: number | null
  }

  export type RestaurantsMinAggregateOutputType = {
    id: number | null
    res_name: string | null
    Image: string | null
    desc: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RestaurantsMaxAggregateOutputType = {
    id: number | null
    res_name: string | null
    Image: string | null
    desc: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RestaurantsCountAggregateOutputType = {
    id: number
    res_name: number
    Image: number
    desc: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RestaurantsAvgAggregateInputType = {
    id?: true
    deletedBy?: true
  }

  export type RestaurantsSumAggregateInputType = {
    id?: true
    deletedBy?: true
  }

  export type RestaurantsMinAggregateInputType = {
    id?: true
    res_name?: true
    Image?: true
    desc?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RestaurantsMaxAggregateInputType = {
    id?: true
    res_name?: true
    Image?: true
    desc?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RestaurantsCountAggregateInputType = {
    id?: true
    res_name?: true
    Image?: true
    desc?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RestaurantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurants to aggregate.
     */
    where?: RestaurantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantsOrderByWithRelationInput | RestaurantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestaurantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Restaurants
    **/
    _count?: true | RestaurantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestaurantsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestaurantsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestaurantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestaurantsMaxAggregateInputType
  }

  export type GetRestaurantsAggregateType<T extends RestaurantsAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurants[P]>
      : GetScalarType<T[P], AggregateRestaurants[P]>
  }




  export type RestaurantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantsWhereInput
    orderBy?: RestaurantsOrderByWithAggregationInput | RestaurantsOrderByWithAggregationInput[]
    by: RestaurantsScalarFieldEnum[] | RestaurantsScalarFieldEnum
    having?: RestaurantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestaurantsCountAggregateInputType | true
    _avg?: RestaurantsAvgAggregateInputType
    _sum?: RestaurantsSumAggregateInputType
    _min?: RestaurantsMinAggregateInputType
    _max?: RestaurantsMaxAggregateInputType
  }

  export type RestaurantsGroupByOutputType = {
    id: number
    res_name: string | null
    Image: string | null
    desc: string | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: RestaurantsCountAggregateOutputType | null
    _avg: RestaurantsAvgAggregateOutputType | null
    _sum: RestaurantsSumAggregateOutputType | null
    _min: RestaurantsMinAggregateOutputType | null
    _max: RestaurantsMaxAggregateOutputType | null
  }

  type GetRestaurantsGroupByPayload<T extends RestaurantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestaurantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestaurantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestaurantsGroupByOutputType[P]>
            : GetScalarType<T[P], RestaurantsGroupByOutputType[P]>
        }
      >
    >


  export type RestaurantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    res_name?: boolean
    Image?: boolean
    desc?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    like_res?: boolean | Restaurants$like_resArgs<ExtArgs>
    rate_res?: boolean | Restaurants$rate_resArgs<ExtArgs>
    _count?: boolean | RestaurantsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurants"]>



  export type RestaurantsSelectScalar = {
    id?: boolean
    res_name?: boolean
    Image?: boolean
    desc?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RestaurantsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "res_name" | "Image" | "desc" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["restaurants"]>
  export type RestaurantsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    like_res?: boolean | Restaurants$like_resArgs<ExtArgs>
    rate_res?: boolean | Restaurants$rate_resArgs<ExtArgs>
    _count?: boolean | RestaurantsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RestaurantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Restaurants"
    objects: {
      like_res: Prisma.$like_resPayload<ExtArgs>[]
      rate_res: Prisma.$rate_resPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      res_name: string | null
      Image: string | null
      desc: string | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["restaurants"]>
    composites: {}
  }

  type RestaurantsGetPayload<S extends boolean | null | undefined | RestaurantsDefaultArgs> = $Result.GetResult<Prisma.$RestaurantsPayload, S>

  type RestaurantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RestaurantsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestaurantsCountAggregateInputType | true
    }

  export interface RestaurantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Restaurants'], meta: { name: 'Restaurants' } }
    /**
     * Find zero or one Restaurants that matches the filter.
     * @param {RestaurantsFindUniqueArgs} args - Arguments to find a Restaurants
     * @example
     * // Get one Restaurants
     * const restaurants = await prisma.restaurants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestaurantsFindUniqueArgs>(args: SelectSubset<T, RestaurantsFindUniqueArgs<ExtArgs>>): Prisma__RestaurantsClient<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Restaurants that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RestaurantsFindUniqueOrThrowArgs} args - Arguments to find a Restaurants
     * @example
     * // Get one Restaurants
     * const restaurants = await prisma.restaurants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestaurantsFindUniqueOrThrowArgs>(args: SelectSubset<T, RestaurantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RestaurantsClient<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantsFindFirstArgs} args - Arguments to find a Restaurants
     * @example
     * // Get one Restaurants
     * const restaurants = await prisma.restaurants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestaurantsFindFirstArgs>(args?: SelectSubset<T, RestaurantsFindFirstArgs<ExtArgs>>): Prisma__RestaurantsClient<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantsFindFirstOrThrowArgs} args - Arguments to find a Restaurants
     * @example
     * // Get one Restaurants
     * const restaurants = await prisma.restaurants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestaurantsFindFirstOrThrowArgs>(args?: SelectSubset<T, RestaurantsFindFirstOrThrowArgs<ExtArgs>>): Prisma__RestaurantsClient<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restaurants
     * const restaurants = await prisma.restaurants.findMany()
     * 
     * // Get first 10 Restaurants
     * const restaurants = await prisma.restaurants.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restaurantsWithIdOnly = await prisma.restaurants.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RestaurantsFindManyArgs>(args?: SelectSubset<T, RestaurantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Restaurants.
     * @param {RestaurantsCreateArgs} args - Arguments to create a Restaurants.
     * @example
     * // Create one Restaurants
     * const Restaurants = await prisma.restaurants.create({
     *   data: {
     *     // ... data to create a Restaurants
     *   }
     * })
     * 
     */
    create<T extends RestaurantsCreateArgs>(args: SelectSubset<T, RestaurantsCreateArgs<ExtArgs>>): Prisma__RestaurantsClient<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Restaurants.
     * @param {RestaurantsCreateManyArgs} args - Arguments to create many Restaurants.
     * @example
     * // Create many Restaurants
     * const restaurants = await prisma.restaurants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RestaurantsCreateManyArgs>(args?: SelectSubset<T, RestaurantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Restaurants.
     * @param {RestaurantsDeleteArgs} args - Arguments to delete one Restaurants.
     * @example
     * // Delete one Restaurants
     * const Restaurants = await prisma.restaurants.delete({
     *   where: {
     *     // ... filter to delete one Restaurants
     *   }
     * })
     * 
     */
    delete<T extends RestaurantsDeleteArgs>(args: SelectSubset<T, RestaurantsDeleteArgs<ExtArgs>>): Prisma__RestaurantsClient<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Restaurants.
     * @param {RestaurantsUpdateArgs} args - Arguments to update one Restaurants.
     * @example
     * // Update one Restaurants
     * const restaurants = await prisma.restaurants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RestaurantsUpdateArgs>(args: SelectSubset<T, RestaurantsUpdateArgs<ExtArgs>>): Prisma__RestaurantsClient<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Restaurants.
     * @param {RestaurantsDeleteManyArgs} args - Arguments to filter Restaurants to delete.
     * @example
     * // Delete a few Restaurants
     * const { count } = await prisma.restaurants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RestaurantsDeleteManyArgs>(args?: SelectSubset<T, RestaurantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restaurants
     * const restaurants = await prisma.restaurants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RestaurantsUpdateManyArgs>(args: SelectSubset<T, RestaurantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Restaurants.
     * @param {RestaurantsUpsertArgs} args - Arguments to update or create a Restaurants.
     * @example
     * // Update or create a Restaurants
     * const restaurants = await prisma.restaurants.upsert({
     *   create: {
     *     // ... data to create a Restaurants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restaurants we want to update
     *   }
     * })
     */
    upsert<T extends RestaurantsUpsertArgs>(args: SelectSubset<T, RestaurantsUpsertArgs<ExtArgs>>): Prisma__RestaurantsClient<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantsCountArgs} args - Arguments to filter Restaurants to count.
     * @example
     * // Count the number of Restaurants
     * const count = await prisma.restaurants.count({
     *   where: {
     *     // ... the filter for the Restaurants we want to count
     *   }
     * })
    **/
    count<T extends RestaurantsCountArgs>(
      args?: Subset<T, RestaurantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RestaurantsAggregateArgs>(args: Subset<T, RestaurantsAggregateArgs>): Prisma.PrismaPromise<GetRestaurantsAggregateType<T>>

    /**
     * Group by Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RestaurantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestaurantsGroupByArgs['orderBy'] }
        : { orderBy?: RestaurantsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RestaurantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Restaurants model
   */
  readonly fields: RestaurantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Restaurants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestaurantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    like_res<T extends Restaurants$like_resArgs<ExtArgs> = {}>(args?: Subset<T, Restaurants$like_resArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$like_resPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rate_res<T extends Restaurants$rate_resArgs<ExtArgs> = {}>(args?: Subset<T, Restaurants$rate_resArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rate_resPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Restaurants model
   */
  interface RestaurantsFieldRefs {
    readonly id: FieldRef<"Restaurants", 'Int'>
    readonly res_name: FieldRef<"Restaurants", 'String'>
    readonly Image: FieldRef<"Restaurants", 'String'>
    readonly desc: FieldRef<"Restaurants", 'String'>
    readonly deletedBy: FieldRef<"Restaurants", 'Int'>
    readonly isDeleted: FieldRef<"Restaurants", 'Boolean'>
    readonly deletedAt: FieldRef<"Restaurants", 'DateTime'>
    readonly createdAt: FieldRef<"Restaurants", 'DateTime'>
    readonly updatedAt: FieldRef<"Restaurants", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Restaurants findUnique
   */
  export type RestaurantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurants
     */
    select?: RestaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurants
     */
    omit?: RestaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantsInclude<ExtArgs> | null
    /**
     * Filter, which Restaurants to fetch.
     */
    where: RestaurantsWhereUniqueInput
  }

  /**
   * Restaurants findUniqueOrThrow
   */
  export type RestaurantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurants
     */
    select?: RestaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurants
     */
    omit?: RestaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantsInclude<ExtArgs> | null
    /**
     * Filter, which Restaurants to fetch.
     */
    where: RestaurantsWhereUniqueInput
  }

  /**
   * Restaurants findFirst
   */
  export type RestaurantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurants
     */
    select?: RestaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurants
     */
    omit?: RestaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantsInclude<ExtArgs> | null
    /**
     * Filter, which Restaurants to fetch.
     */
    where?: RestaurantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantsOrderByWithRelationInput | RestaurantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantsScalarFieldEnum | RestaurantsScalarFieldEnum[]
  }

  /**
   * Restaurants findFirstOrThrow
   */
  export type RestaurantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurants
     */
    select?: RestaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurants
     */
    omit?: RestaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantsInclude<ExtArgs> | null
    /**
     * Filter, which Restaurants to fetch.
     */
    where?: RestaurantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantsOrderByWithRelationInput | RestaurantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantsScalarFieldEnum | RestaurantsScalarFieldEnum[]
  }

  /**
   * Restaurants findMany
   */
  export type RestaurantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurants
     */
    select?: RestaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurants
     */
    omit?: RestaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantsInclude<ExtArgs> | null
    /**
     * Filter, which Restaurants to fetch.
     */
    where?: RestaurantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantsOrderByWithRelationInput | RestaurantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Restaurants.
     */
    cursor?: RestaurantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    distinct?: RestaurantsScalarFieldEnum | RestaurantsScalarFieldEnum[]
  }

  /**
   * Restaurants create
   */
  export type RestaurantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurants
     */
    select?: RestaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurants
     */
    omit?: RestaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantsInclude<ExtArgs> | null
    /**
     * The data needed to create a Restaurants.
     */
    data?: XOR<RestaurantsCreateInput, RestaurantsUncheckedCreateInput>
  }

  /**
   * Restaurants createMany
   */
  export type RestaurantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Restaurants.
     */
    data: RestaurantsCreateManyInput | RestaurantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Restaurants update
   */
  export type RestaurantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurants
     */
    select?: RestaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurants
     */
    omit?: RestaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantsInclude<ExtArgs> | null
    /**
     * The data needed to update a Restaurants.
     */
    data: XOR<RestaurantsUpdateInput, RestaurantsUncheckedUpdateInput>
    /**
     * Choose, which Restaurants to update.
     */
    where: RestaurantsWhereUniqueInput
  }

  /**
   * Restaurants updateMany
   */
  export type RestaurantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Restaurants.
     */
    data: XOR<RestaurantsUpdateManyMutationInput, RestaurantsUncheckedUpdateManyInput>
    /**
     * Filter which Restaurants to update
     */
    where?: RestaurantsWhereInput
    /**
     * Limit how many Restaurants to update.
     */
    limit?: number
  }

  /**
   * Restaurants upsert
   */
  export type RestaurantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurants
     */
    select?: RestaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurants
     */
    omit?: RestaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantsInclude<ExtArgs> | null
    /**
     * The filter to search for the Restaurants to update in case it exists.
     */
    where: RestaurantsWhereUniqueInput
    /**
     * In case the Restaurants found by the `where` argument doesn't exist, create a new Restaurants with this data.
     */
    create: XOR<RestaurantsCreateInput, RestaurantsUncheckedCreateInput>
    /**
     * In case the Restaurants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestaurantsUpdateInput, RestaurantsUncheckedUpdateInput>
  }

  /**
   * Restaurants delete
   */
  export type RestaurantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurants
     */
    select?: RestaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurants
     */
    omit?: RestaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantsInclude<ExtArgs> | null
    /**
     * Filter which Restaurants to delete.
     */
    where: RestaurantsWhereUniqueInput
  }

  /**
   * Restaurants deleteMany
   */
  export type RestaurantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurants to delete
     */
    where?: RestaurantsWhereInput
    /**
     * Limit how many Restaurants to delete.
     */
    limit?: number
  }

  /**
   * Restaurants.like_res
   */
  export type Restaurants$like_resArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_res
     */
    select?: like_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like_res
     */
    omit?: like_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: like_resInclude<ExtArgs> | null
    where?: like_resWhereInput
    orderBy?: like_resOrderByWithRelationInput | like_resOrderByWithRelationInput[]
    cursor?: like_resWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Like_resScalarFieldEnum | Like_resScalarFieldEnum[]
  }

  /**
   * Restaurants.rate_res
   */
  export type Restaurants$rate_resArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rate_res
     */
    select?: rate_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rate_res
     */
    omit?: rate_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rate_resInclude<ExtArgs> | null
    where?: rate_resWhereInput
    orderBy?: rate_resOrderByWithRelationInput | rate_resOrderByWithRelationInput[]
    cursor?: rate_resWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rate_resScalarFieldEnum | Rate_resScalarFieldEnum[]
  }

  /**
   * Restaurants without action
   */
  export type RestaurantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurants
     */
    select?: RestaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurants
     */
    omit?: RestaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantsInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    deletedBy: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    deletedBy: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    full_name: string | null
    email: string | null
    password: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    full_name: string | null
    email: string | null
    password: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    full_name: number
    email: number
    password: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    deletedBy?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    deletedBy?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    password?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    password?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    password?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    full_name: string | null
    email: string | null
    password: string | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    like_res?: boolean | Users$like_resArgs<ExtArgs>
    orders?: boolean | Users$ordersArgs<ExtArgs>
    rate_res?: boolean | Users$rate_resArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    id?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "full_name" | "email" | "password" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    like_res?: boolean | Users$like_resArgs<ExtArgs>
    orders?: boolean | Users$ordersArgs<ExtArgs>
    rate_res?: boolean | Users$rate_resArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      like_res: Prisma.$like_resPayload<ExtArgs>[]
      orders: Prisma.$ordersPayload<ExtArgs>[]
      rate_res: Prisma.$rate_resPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      full_name: string | null
      email: string | null
      password: string | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    like_res<T extends Users$like_resArgs<ExtArgs> = {}>(args?: Subset<T, Users$like_resArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$like_resPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends Users$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Users$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rate_res<T extends Users$rate_resArgs<ExtArgs> = {}>(args?: Subset<T, Users$rate_resArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rate_resPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly full_name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly deletedBy: FieldRef<"Users", 'Int'>
    readonly isDeleted: FieldRef<"Users", 'Boolean'>
    readonly deletedAt: FieldRef<"Users", 'DateTime'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data?: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.like_res
   */
  export type Users$like_resArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_res
     */
    select?: like_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like_res
     */
    omit?: like_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: like_resInclude<ExtArgs> | null
    where?: like_resWhereInput
    orderBy?: like_resOrderByWithRelationInput | like_resOrderByWithRelationInput[]
    cursor?: like_resWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Like_resScalarFieldEnum | Like_resScalarFieldEnum[]
  }

  /**
   * Users.orders
   */
  export type Users$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Users.rate_res
   */
  export type Users$rate_resArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rate_res
     */
    select?: rate_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rate_res
     */
    omit?: rate_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rate_resInclude<ExtArgs> | null
    where?: rate_resWhereInput
    orderBy?: rate_resOrderByWithRelationInput | rate_resOrderByWithRelationInput[]
    cursor?: rate_resWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rate_resScalarFieldEnum | Rate_resScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model food_type
   */

  export type AggregateFood_type = {
    _count: Food_typeCountAggregateOutputType | null
    _avg: Food_typeAvgAggregateOutputType | null
    _sum: Food_typeSumAggregateOutputType | null
    _min: Food_typeMinAggregateOutputType | null
    _max: Food_typeMaxAggregateOutputType | null
  }

  export type Food_typeAvgAggregateOutputType = {
    id: number | null
    deletedBy: number | null
  }

  export type Food_typeSumAggregateOutputType = {
    id: number | null
    deletedBy: number | null
  }

  export type Food_typeMinAggregateOutputType = {
    id: number | null
    type_name: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Food_typeMaxAggregateOutputType = {
    id: number | null
    type_name: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Food_typeCountAggregateOutputType = {
    id: number
    type_name: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Food_typeAvgAggregateInputType = {
    id?: true
    deletedBy?: true
  }

  export type Food_typeSumAggregateInputType = {
    id?: true
    deletedBy?: true
  }

  export type Food_typeMinAggregateInputType = {
    id?: true
    type_name?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Food_typeMaxAggregateInputType = {
    id?: true
    type_name?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Food_typeCountAggregateInputType = {
    id?: true
    type_name?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Food_typeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which food_type to aggregate.
     */
    where?: food_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of food_types to fetch.
     */
    orderBy?: food_typeOrderByWithRelationInput | food_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: food_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` food_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` food_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned food_types
    **/
    _count?: true | Food_typeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Food_typeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Food_typeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Food_typeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Food_typeMaxAggregateInputType
  }

  export type GetFood_typeAggregateType<T extends Food_typeAggregateArgs> = {
        [P in keyof T & keyof AggregateFood_type]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFood_type[P]>
      : GetScalarType<T[P], AggregateFood_type[P]>
  }




  export type food_typeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: food_typeWhereInput
    orderBy?: food_typeOrderByWithAggregationInput | food_typeOrderByWithAggregationInput[]
    by: Food_typeScalarFieldEnum[] | Food_typeScalarFieldEnum
    having?: food_typeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Food_typeCountAggregateInputType | true
    _avg?: Food_typeAvgAggregateInputType
    _sum?: Food_typeSumAggregateInputType
    _min?: Food_typeMinAggregateInputType
    _max?: Food_typeMaxAggregateInputType
  }

  export type Food_typeGroupByOutputType = {
    id: number
    type_name: string | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: Food_typeCountAggregateOutputType | null
    _avg: Food_typeAvgAggregateOutputType | null
    _sum: Food_typeSumAggregateOutputType | null
    _min: Food_typeMinAggregateOutputType | null
    _max: Food_typeMaxAggregateOutputType | null
  }

  type GetFood_typeGroupByPayload<T extends food_typeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Food_typeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Food_typeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Food_typeGroupByOutputType[P]>
            : GetScalarType<T[P], Food_typeGroupByOutputType[P]>
        }
      >
    >


  export type food_typeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type_name?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    foods?: boolean | food_type$foodsArgs<ExtArgs>
    _count?: boolean | Food_typeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["food_type"]>



  export type food_typeSelectScalar = {
    id?: boolean
    type_name?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type food_typeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type_name" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["food_type"]>
  export type food_typeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foods?: boolean | food_type$foodsArgs<ExtArgs>
    _count?: boolean | Food_typeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $food_typePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "food_type"
    objects: {
      foods: Prisma.$foodsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type_name: string | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["food_type"]>
    composites: {}
  }

  type food_typeGetPayload<S extends boolean | null | undefined | food_typeDefaultArgs> = $Result.GetResult<Prisma.$food_typePayload, S>

  type food_typeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<food_typeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Food_typeCountAggregateInputType | true
    }

  export interface food_typeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['food_type'], meta: { name: 'food_type' } }
    /**
     * Find zero or one Food_type that matches the filter.
     * @param {food_typeFindUniqueArgs} args - Arguments to find a Food_type
     * @example
     * // Get one Food_type
     * const food_type = await prisma.food_type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends food_typeFindUniqueArgs>(args: SelectSubset<T, food_typeFindUniqueArgs<ExtArgs>>): Prisma__food_typeClient<$Result.GetResult<Prisma.$food_typePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Food_type that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {food_typeFindUniqueOrThrowArgs} args - Arguments to find a Food_type
     * @example
     * // Get one Food_type
     * const food_type = await prisma.food_type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends food_typeFindUniqueOrThrowArgs>(args: SelectSubset<T, food_typeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__food_typeClient<$Result.GetResult<Prisma.$food_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food_type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_typeFindFirstArgs} args - Arguments to find a Food_type
     * @example
     * // Get one Food_type
     * const food_type = await prisma.food_type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends food_typeFindFirstArgs>(args?: SelectSubset<T, food_typeFindFirstArgs<ExtArgs>>): Prisma__food_typeClient<$Result.GetResult<Prisma.$food_typePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food_type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_typeFindFirstOrThrowArgs} args - Arguments to find a Food_type
     * @example
     * // Get one Food_type
     * const food_type = await prisma.food_type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends food_typeFindFirstOrThrowArgs>(args?: SelectSubset<T, food_typeFindFirstOrThrowArgs<ExtArgs>>): Prisma__food_typeClient<$Result.GetResult<Prisma.$food_typePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Food_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_typeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Food_types
     * const food_types = await prisma.food_type.findMany()
     * 
     * // Get first 10 Food_types
     * const food_types = await prisma.food_type.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const food_typeWithIdOnly = await prisma.food_type.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends food_typeFindManyArgs>(args?: SelectSubset<T, food_typeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$food_typePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Food_type.
     * @param {food_typeCreateArgs} args - Arguments to create a Food_type.
     * @example
     * // Create one Food_type
     * const Food_type = await prisma.food_type.create({
     *   data: {
     *     // ... data to create a Food_type
     *   }
     * })
     * 
     */
    create<T extends food_typeCreateArgs>(args: SelectSubset<T, food_typeCreateArgs<ExtArgs>>): Prisma__food_typeClient<$Result.GetResult<Prisma.$food_typePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Food_types.
     * @param {food_typeCreateManyArgs} args - Arguments to create many Food_types.
     * @example
     * // Create many Food_types
     * const food_type = await prisma.food_type.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends food_typeCreateManyArgs>(args?: SelectSubset<T, food_typeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Food_type.
     * @param {food_typeDeleteArgs} args - Arguments to delete one Food_type.
     * @example
     * // Delete one Food_type
     * const Food_type = await prisma.food_type.delete({
     *   where: {
     *     // ... filter to delete one Food_type
     *   }
     * })
     * 
     */
    delete<T extends food_typeDeleteArgs>(args: SelectSubset<T, food_typeDeleteArgs<ExtArgs>>): Prisma__food_typeClient<$Result.GetResult<Prisma.$food_typePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Food_type.
     * @param {food_typeUpdateArgs} args - Arguments to update one Food_type.
     * @example
     * // Update one Food_type
     * const food_type = await prisma.food_type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends food_typeUpdateArgs>(args: SelectSubset<T, food_typeUpdateArgs<ExtArgs>>): Prisma__food_typeClient<$Result.GetResult<Prisma.$food_typePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Food_types.
     * @param {food_typeDeleteManyArgs} args - Arguments to filter Food_types to delete.
     * @example
     * // Delete a few Food_types
     * const { count } = await prisma.food_type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends food_typeDeleteManyArgs>(args?: SelectSubset<T, food_typeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Food_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_typeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Food_types
     * const food_type = await prisma.food_type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends food_typeUpdateManyArgs>(args: SelectSubset<T, food_typeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Food_type.
     * @param {food_typeUpsertArgs} args - Arguments to update or create a Food_type.
     * @example
     * // Update or create a Food_type
     * const food_type = await prisma.food_type.upsert({
     *   create: {
     *     // ... data to create a Food_type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Food_type we want to update
     *   }
     * })
     */
    upsert<T extends food_typeUpsertArgs>(args: SelectSubset<T, food_typeUpsertArgs<ExtArgs>>): Prisma__food_typeClient<$Result.GetResult<Prisma.$food_typePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Food_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_typeCountArgs} args - Arguments to filter Food_types to count.
     * @example
     * // Count the number of Food_types
     * const count = await prisma.food_type.count({
     *   where: {
     *     // ... the filter for the Food_types we want to count
     *   }
     * })
    **/
    count<T extends food_typeCountArgs>(
      args?: Subset<T, food_typeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Food_typeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Food_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Food_typeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Food_typeAggregateArgs>(args: Subset<T, Food_typeAggregateArgs>): Prisma.PrismaPromise<GetFood_typeAggregateType<T>>

    /**
     * Group by Food_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_typeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends food_typeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: food_typeGroupByArgs['orderBy'] }
        : { orderBy?: food_typeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, food_typeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFood_typeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the food_type model
   */
  readonly fields: food_typeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for food_type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__food_typeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    foods<T extends food_type$foodsArgs<ExtArgs> = {}>(args?: Subset<T, food_type$foodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$foodsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the food_type model
   */
  interface food_typeFieldRefs {
    readonly id: FieldRef<"food_type", 'Int'>
    readonly type_name: FieldRef<"food_type", 'String'>
    readonly deletedBy: FieldRef<"food_type", 'Int'>
    readonly isDeleted: FieldRef<"food_type", 'Boolean'>
    readonly deletedAt: FieldRef<"food_type", 'DateTime'>
    readonly createdAt: FieldRef<"food_type", 'DateTime'>
    readonly updatedAt: FieldRef<"food_type", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * food_type findUnique
   */
  export type food_typeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_type
     */
    select?: food_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food_type
     */
    omit?: food_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_typeInclude<ExtArgs> | null
    /**
     * Filter, which food_type to fetch.
     */
    where: food_typeWhereUniqueInput
  }

  /**
   * food_type findUniqueOrThrow
   */
  export type food_typeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_type
     */
    select?: food_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food_type
     */
    omit?: food_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_typeInclude<ExtArgs> | null
    /**
     * Filter, which food_type to fetch.
     */
    where: food_typeWhereUniqueInput
  }

  /**
   * food_type findFirst
   */
  export type food_typeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_type
     */
    select?: food_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food_type
     */
    omit?: food_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_typeInclude<ExtArgs> | null
    /**
     * Filter, which food_type to fetch.
     */
    where?: food_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of food_types to fetch.
     */
    orderBy?: food_typeOrderByWithRelationInput | food_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for food_types.
     */
    cursor?: food_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` food_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` food_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of food_types.
     */
    distinct?: Food_typeScalarFieldEnum | Food_typeScalarFieldEnum[]
  }

  /**
   * food_type findFirstOrThrow
   */
  export type food_typeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_type
     */
    select?: food_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food_type
     */
    omit?: food_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_typeInclude<ExtArgs> | null
    /**
     * Filter, which food_type to fetch.
     */
    where?: food_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of food_types to fetch.
     */
    orderBy?: food_typeOrderByWithRelationInput | food_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for food_types.
     */
    cursor?: food_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` food_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` food_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of food_types.
     */
    distinct?: Food_typeScalarFieldEnum | Food_typeScalarFieldEnum[]
  }

  /**
   * food_type findMany
   */
  export type food_typeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_type
     */
    select?: food_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food_type
     */
    omit?: food_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_typeInclude<ExtArgs> | null
    /**
     * Filter, which food_types to fetch.
     */
    where?: food_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of food_types to fetch.
     */
    orderBy?: food_typeOrderByWithRelationInput | food_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing food_types.
     */
    cursor?: food_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` food_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` food_types.
     */
    skip?: number
    distinct?: Food_typeScalarFieldEnum | Food_typeScalarFieldEnum[]
  }

  /**
   * food_type create
   */
  export type food_typeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_type
     */
    select?: food_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food_type
     */
    omit?: food_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_typeInclude<ExtArgs> | null
    /**
     * The data needed to create a food_type.
     */
    data?: XOR<food_typeCreateInput, food_typeUncheckedCreateInput>
  }

  /**
   * food_type createMany
   */
  export type food_typeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many food_types.
     */
    data: food_typeCreateManyInput | food_typeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * food_type update
   */
  export type food_typeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_type
     */
    select?: food_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food_type
     */
    omit?: food_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_typeInclude<ExtArgs> | null
    /**
     * The data needed to update a food_type.
     */
    data: XOR<food_typeUpdateInput, food_typeUncheckedUpdateInput>
    /**
     * Choose, which food_type to update.
     */
    where: food_typeWhereUniqueInput
  }

  /**
   * food_type updateMany
   */
  export type food_typeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update food_types.
     */
    data: XOR<food_typeUpdateManyMutationInput, food_typeUncheckedUpdateManyInput>
    /**
     * Filter which food_types to update
     */
    where?: food_typeWhereInput
    /**
     * Limit how many food_types to update.
     */
    limit?: number
  }

  /**
   * food_type upsert
   */
  export type food_typeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_type
     */
    select?: food_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food_type
     */
    omit?: food_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_typeInclude<ExtArgs> | null
    /**
     * The filter to search for the food_type to update in case it exists.
     */
    where: food_typeWhereUniqueInput
    /**
     * In case the food_type found by the `where` argument doesn't exist, create a new food_type with this data.
     */
    create: XOR<food_typeCreateInput, food_typeUncheckedCreateInput>
    /**
     * In case the food_type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<food_typeUpdateInput, food_typeUncheckedUpdateInput>
  }

  /**
   * food_type delete
   */
  export type food_typeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_type
     */
    select?: food_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food_type
     */
    omit?: food_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_typeInclude<ExtArgs> | null
    /**
     * Filter which food_type to delete.
     */
    where: food_typeWhereUniqueInput
  }

  /**
   * food_type deleteMany
   */
  export type food_typeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which food_types to delete
     */
    where?: food_typeWhereInput
    /**
     * Limit how many food_types to delete.
     */
    limit?: number
  }

  /**
   * food_type.foods
   */
  export type food_type$foodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foods
     */
    select?: foodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the foods
     */
    omit?: foodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodsInclude<ExtArgs> | null
    where?: foodsWhereInput
    orderBy?: foodsOrderByWithRelationInput | foodsOrderByWithRelationInput[]
    cursor?: foodsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodsScalarFieldEnum | FoodsScalarFieldEnum[]
  }

  /**
   * food_type without action
   */
  export type food_typeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_type
     */
    select?: food_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food_type
     */
    omit?: food_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_typeInclude<ExtArgs> | null
  }


  /**
   * Model foods
   */

  export type AggregateFoods = {
    _count: FoodsCountAggregateOutputType | null
    _avg: FoodsAvgAggregateOutputType | null
    _sum: FoodsSumAggregateOutputType | null
    _min: FoodsMinAggregateOutputType | null
    _max: FoodsMaxAggregateOutputType | null
  }

  export type FoodsAvgAggregateOutputType = {
    id: number | null
    price: number | null
    type_id: number | null
    deletedBy: number | null
  }

  export type FoodsSumAggregateOutputType = {
    id: number | null
    price: number | null
    type_id: number | null
    deletedBy: number | null
  }

  export type FoodsMinAggregateOutputType = {
    id: number | null
    food_name: string | null
    image: string | null
    price: number | null
    desc: string | null
    type_id: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodsMaxAggregateOutputType = {
    id: number | null
    food_name: string | null
    image: string | null
    price: number | null
    desc: string | null
    type_id: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodsCountAggregateOutputType = {
    id: number
    food_name: number
    image: number
    price: number
    desc: number
    type_id: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FoodsAvgAggregateInputType = {
    id?: true
    price?: true
    type_id?: true
    deletedBy?: true
  }

  export type FoodsSumAggregateInputType = {
    id?: true
    price?: true
    type_id?: true
    deletedBy?: true
  }

  export type FoodsMinAggregateInputType = {
    id?: true
    food_name?: true
    image?: true
    price?: true
    desc?: true
    type_id?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodsMaxAggregateInputType = {
    id?: true
    food_name?: true
    image?: true
    price?: true
    desc?: true
    type_id?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodsCountAggregateInputType = {
    id?: true
    food_name?: true
    image?: true
    price?: true
    desc?: true
    type_id?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FoodsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which foods to aggregate.
     */
    where?: foodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of foods to fetch.
     */
    orderBy?: foodsOrderByWithRelationInput | foodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: foodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned foods
    **/
    _count?: true | FoodsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodsMaxAggregateInputType
  }

  export type GetFoodsAggregateType<T extends FoodsAggregateArgs> = {
        [P in keyof T & keyof AggregateFoods]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoods[P]>
      : GetScalarType<T[P], AggregateFoods[P]>
  }




  export type foodsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: foodsWhereInput
    orderBy?: foodsOrderByWithAggregationInput | foodsOrderByWithAggregationInput[]
    by: FoodsScalarFieldEnum[] | FoodsScalarFieldEnum
    having?: foodsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodsCountAggregateInputType | true
    _avg?: FoodsAvgAggregateInputType
    _sum?: FoodsSumAggregateInputType
    _min?: FoodsMinAggregateInputType
    _max?: FoodsMaxAggregateInputType
  }

  export type FoodsGroupByOutputType = {
    id: number
    food_name: string | null
    image: string | null
    price: number | null
    desc: string | null
    type_id: number | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: FoodsCountAggregateOutputType | null
    _avg: FoodsAvgAggregateOutputType | null
    _sum: FoodsSumAggregateOutputType | null
    _min: FoodsMinAggregateOutputType | null
    _max: FoodsMaxAggregateOutputType | null
  }

  type GetFoodsGroupByPayload<T extends foodsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodsGroupByOutputType[P]>
            : GetScalarType<T[P], FoodsGroupByOutputType[P]>
        }
      >
    >


  export type foodsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    food_name?: boolean
    image?: boolean
    price?: boolean
    desc?: boolean
    type_id?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    food_type?: boolean | foods$food_typeArgs<ExtArgs>
    orders?: boolean | foods$ordersArgs<ExtArgs>
    sub_foods?: boolean | foods$sub_foodsArgs<ExtArgs>
    _count?: boolean | FoodsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foods"]>



  export type foodsSelectScalar = {
    id?: boolean
    food_name?: boolean
    image?: boolean
    price?: boolean
    desc?: boolean
    type_id?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type foodsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "food_name" | "image" | "price" | "desc" | "type_id" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["foods"]>
  export type foodsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food_type?: boolean | foods$food_typeArgs<ExtArgs>
    orders?: boolean | foods$ordersArgs<ExtArgs>
    sub_foods?: boolean | foods$sub_foodsArgs<ExtArgs>
    _count?: boolean | FoodsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $foodsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "foods"
    objects: {
      food_type: Prisma.$food_typePayload<ExtArgs> | null
      orders: Prisma.$ordersPayload<ExtArgs>[]
      sub_foods: Prisma.$sub_foodsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      food_name: string | null
      image: string | null
      price: number | null
      desc: string | null
      type_id: number | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["foods"]>
    composites: {}
  }

  type foodsGetPayload<S extends boolean | null | undefined | foodsDefaultArgs> = $Result.GetResult<Prisma.$foodsPayload, S>

  type foodsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<foodsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodsCountAggregateInputType | true
    }

  export interface foodsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['foods'], meta: { name: 'foods' } }
    /**
     * Find zero or one Foods that matches the filter.
     * @param {foodsFindUniqueArgs} args - Arguments to find a Foods
     * @example
     * // Get one Foods
     * const foods = await prisma.foods.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends foodsFindUniqueArgs>(args: SelectSubset<T, foodsFindUniqueArgs<ExtArgs>>): Prisma__foodsClient<$Result.GetResult<Prisma.$foodsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Foods that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {foodsFindUniqueOrThrowArgs} args - Arguments to find a Foods
     * @example
     * // Get one Foods
     * const foods = await prisma.foods.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends foodsFindUniqueOrThrowArgs>(args: SelectSubset<T, foodsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__foodsClient<$Result.GetResult<Prisma.$foodsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foodsFindFirstArgs} args - Arguments to find a Foods
     * @example
     * // Get one Foods
     * const foods = await prisma.foods.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends foodsFindFirstArgs>(args?: SelectSubset<T, foodsFindFirstArgs<ExtArgs>>): Prisma__foodsClient<$Result.GetResult<Prisma.$foodsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Foods that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foodsFindFirstOrThrowArgs} args - Arguments to find a Foods
     * @example
     * // Get one Foods
     * const foods = await prisma.foods.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends foodsFindFirstOrThrowArgs>(args?: SelectSubset<T, foodsFindFirstOrThrowArgs<ExtArgs>>): Prisma__foodsClient<$Result.GetResult<Prisma.$foodsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foodsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Foods
     * const foods = await prisma.foods.findMany()
     * 
     * // Get first 10 Foods
     * const foods = await prisma.foods.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodsWithIdOnly = await prisma.foods.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends foodsFindManyArgs>(args?: SelectSubset<T, foodsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$foodsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Foods.
     * @param {foodsCreateArgs} args - Arguments to create a Foods.
     * @example
     * // Create one Foods
     * const Foods = await prisma.foods.create({
     *   data: {
     *     // ... data to create a Foods
     *   }
     * })
     * 
     */
    create<T extends foodsCreateArgs>(args: SelectSubset<T, foodsCreateArgs<ExtArgs>>): Prisma__foodsClient<$Result.GetResult<Prisma.$foodsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Foods.
     * @param {foodsCreateManyArgs} args - Arguments to create many Foods.
     * @example
     * // Create many Foods
     * const foods = await prisma.foods.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends foodsCreateManyArgs>(args?: SelectSubset<T, foodsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Foods.
     * @param {foodsDeleteArgs} args - Arguments to delete one Foods.
     * @example
     * // Delete one Foods
     * const Foods = await prisma.foods.delete({
     *   where: {
     *     // ... filter to delete one Foods
     *   }
     * })
     * 
     */
    delete<T extends foodsDeleteArgs>(args: SelectSubset<T, foodsDeleteArgs<ExtArgs>>): Prisma__foodsClient<$Result.GetResult<Prisma.$foodsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Foods.
     * @param {foodsUpdateArgs} args - Arguments to update one Foods.
     * @example
     * // Update one Foods
     * const foods = await prisma.foods.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends foodsUpdateArgs>(args: SelectSubset<T, foodsUpdateArgs<ExtArgs>>): Prisma__foodsClient<$Result.GetResult<Prisma.$foodsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Foods.
     * @param {foodsDeleteManyArgs} args - Arguments to filter Foods to delete.
     * @example
     * // Delete a few Foods
     * const { count } = await prisma.foods.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends foodsDeleteManyArgs>(args?: SelectSubset<T, foodsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foodsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Foods
     * const foods = await prisma.foods.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends foodsUpdateManyArgs>(args: SelectSubset<T, foodsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Foods.
     * @param {foodsUpsertArgs} args - Arguments to update or create a Foods.
     * @example
     * // Update or create a Foods
     * const foods = await prisma.foods.upsert({
     *   create: {
     *     // ... data to create a Foods
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Foods we want to update
     *   }
     * })
     */
    upsert<T extends foodsUpsertArgs>(args: SelectSubset<T, foodsUpsertArgs<ExtArgs>>): Prisma__foodsClient<$Result.GetResult<Prisma.$foodsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foodsCountArgs} args - Arguments to filter Foods to count.
     * @example
     * // Count the number of Foods
     * const count = await prisma.foods.count({
     *   where: {
     *     // ... the filter for the Foods we want to count
     *   }
     * })
    **/
    count<T extends foodsCountArgs>(
      args?: Subset<T, foodsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FoodsAggregateArgs>(args: Subset<T, FoodsAggregateArgs>): Prisma.PrismaPromise<GetFoodsAggregateType<T>>

    /**
     * Group by Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foodsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends foodsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: foodsGroupByArgs['orderBy'] }
        : { orderBy?: foodsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, foodsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the foods model
   */
  readonly fields: foodsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for foods.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__foodsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    food_type<T extends foods$food_typeArgs<ExtArgs> = {}>(args?: Subset<T, foods$food_typeArgs<ExtArgs>>): Prisma__food_typeClient<$Result.GetResult<Prisma.$food_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orders<T extends foods$ordersArgs<ExtArgs> = {}>(args?: Subset<T, foods$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sub_foods<T extends foods$sub_foodsArgs<ExtArgs> = {}>(args?: Subset<T, foods$sub_foodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sub_foodsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the foods model
   */
  interface foodsFieldRefs {
    readonly id: FieldRef<"foods", 'Int'>
    readonly food_name: FieldRef<"foods", 'String'>
    readonly image: FieldRef<"foods", 'String'>
    readonly price: FieldRef<"foods", 'Float'>
    readonly desc: FieldRef<"foods", 'String'>
    readonly type_id: FieldRef<"foods", 'Int'>
    readonly deletedBy: FieldRef<"foods", 'Int'>
    readonly isDeleted: FieldRef<"foods", 'Boolean'>
    readonly deletedAt: FieldRef<"foods", 'DateTime'>
    readonly createdAt: FieldRef<"foods", 'DateTime'>
    readonly updatedAt: FieldRef<"foods", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * foods findUnique
   */
  export type foodsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foods
     */
    select?: foodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the foods
     */
    omit?: foodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodsInclude<ExtArgs> | null
    /**
     * Filter, which foods to fetch.
     */
    where: foodsWhereUniqueInput
  }

  /**
   * foods findUniqueOrThrow
   */
  export type foodsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foods
     */
    select?: foodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the foods
     */
    omit?: foodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodsInclude<ExtArgs> | null
    /**
     * Filter, which foods to fetch.
     */
    where: foodsWhereUniqueInput
  }

  /**
   * foods findFirst
   */
  export type foodsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foods
     */
    select?: foodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the foods
     */
    omit?: foodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodsInclude<ExtArgs> | null
    /**
     * Filter, which foods to fetch.
     */
    where?: foodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of foods to fetch.
     */
    orderBy?: foodsOrderByWithRelationInput | foodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for foods.
     */
    cursor?: foodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of foods.
     */
    distinct?: FoodsScalarFieldEnum | FoodsScalarFieldEnum[]
  }

  /**
   * foods findFirstOrThrow
   */
  export type foodsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foods
     */
    select?: foodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the foods
     */
    omit?: foodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodsInclude<ExtArgs> | null
    /**
     * Filter, which foods to fetch.
     */
    where?: foodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of foods to fetch.
     */
    orderBy?: foodsOrderByWithRelationInput | foodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for foods.
     */
    cursor?: foodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of foods.
     */
    distinct?: FoodsScalarFieldEnum | FoodsScalarFieldEnum[]
  }

  /**
   * foods findMany
   */
  export type foodsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foods
     */
    select?: foodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the foods
     */
    omit?: foodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodsInclude<ExtArgs> | null
    /**
     * Filter, which foods to fetch.
     */
    where?: foodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of foods to fetch.
     */
    orderBy?: foodsOrderByWithRelationInput | foodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing foods.
     */
    cursor?: foodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` foods.
     */
    skip?: number
    distinct?: FoodsScalarFieldEnum | FoodsScalarFieldEnum[]
  }

  /**
   * foods create
   */
  export type foodsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foods
     */
    select?: foodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the foods
     */
    omit?: foodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodsInclude<ExtArgs> | null
    /**
     * The data needed to create a foods.
     */
    data?: XOR<foodsCreateInput, foodsUncheckedCreateInput>
  }

  /**
   * foods createMany
   */
  export type foodsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many foods.
     */
    data: foodsCreateManyInput | foodsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * foods update
   */
  export type foodsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foods
     */
    select?: foodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the foods
     */
    omit?: foodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodsInclude<ExtArgs> | null
    /**
     * The data needed to update a foods.
     */
    data: XOR<foodsUpdateInput, foodsUncheckedUpdateInput>
    /**
     * Choose, which foods to update.
     */
    where: foodsWhereUniqueInput
  }

  /**
   * foods updateMany
   */
  export type foodsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update foods.
     */
    data: XOR<foodsUpdateManyMutationInput, foodsUncheckedUpdateManyInput>
    /**
     * Filter which foods to update
     */
    where?: foodsWhereInput
    /**
     * Limit how many foods to update.
     */
    limit?: number
  }

  /**
   * foods upsert
   */
  export type foodsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foods
     */
    select?: foodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the foods
     */
    omit?: foodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodsInclude<ExtArgs> | null
    /**
     * The filter to search for the foods to update in case it exists.
     */
    where: foodsWhereUniqueInput
    /**
     * In case the foods found by the `where` argument doesn't exist, create a new foods with this data.
     */
    create: XOR<foodsCreateInput, foodsUncheckedCreateInput>
    /**
     * In case the foods was found with the provided `where` argument, update it with this data.
     */
    update: XOR<foodsUpdateInput, foodsUncheckedUpdateInput>
  }

  /**
   * foods delete
   */
  export type foodsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foods
     */
    select?: foodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the foods
     */
    omit?: foodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodsInclude<ExtArgs> | null
    /**
     * Filter which foods to delete.
     */
    where: foodsWhereUniqueInput
  }

  /**
   * foods deleteMany
   */
  export type foodsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which foods to delete
     */
    where?: foodsWhereInput
    /**
     * Limit how many foods to delete.
     */
    limit?: number
  }

  /**
   * foods.food_type
   */
  export type foods$food_typeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_type
     */
    select?: food_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food_type
     */
    omit?: food_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_typeInclude<ExtArgs> | null
    where?: food_typeWhereInput
  }

  /**
   * foods.orders
   */
  export type foods$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * foods.sub_foods
   */
  export type foods$sub_foodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_foods
     */
    select?: sub_foodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_foods
     */
    omit?: sub_foodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_foodsInclude<ExtArgs> | null
    where?: sub_foodsWhereInput
    orderBy?: sub_foodsOrderByWithRelationInput | sub_foodsOrderByWithRelationInput[]
    cursor?: sub_foodsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sub_foodsScalarFieldEnum | Sub_foodsScalarFieldEnum[]
  }

  /**
   * foods without action
   */
  export type foodsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foods
     */
    select?: foodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the foods
     */
    omit?: foodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodsInclude<ExtArgs> | null
  }


  /**
   * Model like_res
   */

  export type AggregateLike_res = {
    _count: Like_resCountAggregateOutputType | null
    _avg: Like_resAvgAggregateOutputType | null
    _sum: Like_resSumAggregateOutputType | null
    _min: Like_resMinAggregateOutputType | null
    _max: Like_resMaxAggregateOutputType | null
  }

  export type Like_resAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    res_id: number | null
    deletedBy: number | null
  }

  export type Like_resSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    res_id: number | null
    deletedBy: number | null
  }

  export type Like_resMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    res_id: number | null
    date_like: Date | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Like_resMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    res_id: number | null
    date_like: Date | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Like_resCountAggregateOutputType = {
    id: number
    user_id: number
    res_id: number
    date_like: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Like_resAvgAggregateInputType = {
    id?: true
    user_id?: true
    res_id?: true
    deletedBy?: true
  }

  export type Like_resSumAggregateInputType = {
    id?: true
    user_id?: true
    res_id?: true
    deletedBy?: true
  }

  export type Like_resMinAggregateInputType = {
    id?: true
    user_id?: true
    res_id?: true
    date_like?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Like_resMaxAggregateInputType = {
    id?: true
    user_id?: true
    res_id?: true
    date_like?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Like_resCountAggregateInputType = {
    id?: true
    user_id?: true
    res_id?: true
    date_like?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Like_resAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which like_res to aggregate.
     */
    where?: like_resWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of like_res to fetch.
     */
    orderBy?: like_resOrderByWithRelationInput | like_resOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: like_resWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` like_res from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` like_res.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned like_res
    **/
    _count?: true | Like_resCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Like_resAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Like_resSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Like_resMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Like_resMaxAggregateInputType
  }

  export type GetLike_resAggregateType<T extends Like_resAggregateArgs> = {
        [P in keyof T & keyof AggregateLike_res]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLike_res[P]>
      : GetScalarType<T[P], AggregateLike_res[P]>
  }




  export type like_resGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: like_resWhereInput
    orderBy?: like_resOrderByWithAggregationInput | like_resOrderByWithAggregationInput[]
    by: Like_resScalarFieldEnum[] | Like_resScalarFieldEnum
    having?: like_resScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Like_resCountAggregateInputType | true
    _avg?: Like_resAvgAggregateInputType
    _sum?: Like_resSumAggregateInputType
    _min?: Like_resMinAggregateInputType
    _max?: Like_resMaxAggregateInputType
  }

  export type Like_resGroupByOutputType = {
    id: number
    user_id: number | null
    res_id: number | null
    date_like: Date | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: Like_resCountAggregateOutputType | null
    _avg: Like_resAvgAggregateOutputType | null
    _sum: Like_resSumAggregateOutputType | null
    _min: Like_resMinAggregateOutputType | null
    _max: Like_resMaxAggregateOutputType | null
  }

  type GetLike_resGroupByPayload<T extends like_resGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Like_resGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Like_resGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Like_resGroupByOutputType[P]>
            : GetScalarType<T[P], Like_resGroupByOutputType[P]>
        }
      >
    >


  export type like_resSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    res_id?: boolean
    date_like?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Users?: boolean | like_res$UsersArgs<ExtArgs>
    Restaurants?: boolean | like_res$RestaurantsArgs<ExtArgs>
  }, ExtArgs["result"]["like_res"]>



  export type like_resSelectScalar = {
    id?: boolean
    user_id?: boolean
    res_id?: boolean
    date_like?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type like_resOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "res_id" | "date_like" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["like_res"]>
  export type like_resInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | like_res$UsersArgs<ExtArgs>
    Restaurants?: boolean | like_res$RestaurantsArgs<ExtArgs>
  }

  export type $like_resPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "like_res"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs> | null
      Restaurants: Prisma.$RestaurantsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      res_id: number | null
      date_like: Date | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["like_res"]>
    composites: {}
  }

  type like_resGetPayload<S extends boolean | null | undefined | like_resDefaultArgs> = $Result.GetResult<Prisma.$like_resPayload, S>

  type like_resCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<like_resFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Like_resCountAggregateInputType | true
    }

  export interface like_resDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['like_res'], meta: { name: 'like_res' } }
    /**
     * Find zero or one Like_res that matches the filter.
     * @param {like_resFindUniqueArgs} args - Arguments to find a Like_res
     * @example
     * // Get one Like_res
     * const like_res = await prisma.like_res.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends like_resFindUniqueArgs>(args: SelectSubset<T, like_resFindUniqueArgs<ExtArgs>>): Prisma__like_resClient<$Result.GetResult<Prisma.$like_resPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Like_res that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {like_resFindUniqueOrThrowArgs} args - Arguments to find a Like_res
     * @example
     * // Get one Like_res
     * const like_res = await prisma.like_res.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends like_resFindUniqueOrThrowArgs>(args: SelectSubset<T, like_resFindUniqueOrThrowArgs<ExtArgs>>): Prisma__like_resClient<$Result.GetResult<Prisma.$like_resPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like_res that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {like_resFindFirstArgs} args - Arguments to find a Like_res
     * @example
     * // Get one Like_res
     * const like_res = await prisma.like_res.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends like_resFindFirstArgs>(args?: SelectSubset<T, like_resFindFirstArgs<ExtArgs>>): Prisma__like_resClient<$Result.GetResult<Prisma.$like_resPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like_res that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {like_resFindFirstOrThrowArgs} args - Arguments to find a Like_res
     * @example
     * // Get one Like_res
     * const like_res = await prisma.like_res.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends like_resFindFirstOrThrowArgs>(args?: SelectSubset<T, like_resFindFirstOrThrowArgs<ExtArgs>>): Prisma__like_resClient<$Result.GetResult<Prisma.$like_resPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Like_res that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {like_resFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Like_res
     * const like_res = await prisma.like_res.findMany()
     * 
     * // Get first 10 Like_res
     * const like_res = await prisma.like_res.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const like_resWithIdOnly = await prisma.like_res.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends like_resFindManyArgs>(args?: SelectSubset<T, like_resFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$like_resPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Like_res.
     * @param {like_resCreateArgs} args - Arguments to create a Like_res.
     * @example
     * // Create one Like_res
     * const Like_res = await prisma.like_res.create({
     *   data: {
     *     // ... data to create a Like_res
     *   }
     * })
     * 
     */
    create<T extends like_resCreateArgs>(args: SelectSubset<T, like_resCreateArgs<ExtArgs>>): Prisma__like_resClient<$Result.GetResult<Prisma.$like_resPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Like_res.
     * @param {like_resCreateManyArgs} args - Arguments to create many Like_res.
     * @example
     * // Create many Like_res
     * const like_res = await prisma.like_res.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends like_resCreateManyArgs>(args?: SelectSubset<T, like_resCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Like_res.
     * @param {like_resDeleteArgs} args - Arguments to delete one Like_res.
     * @example
     * // Delete one Like_res
     * const Like_res = await prisma.like_res.delete({
     *   where: {
     *     // ... filter to delete one Like_res
     *   }
     * })
     * 
     */
    delete<T extends like_resDeleteArgs>(args: SelectSubset<T, like_resDeleteArgs<ExtArgs>>): Prisma__like_resClient<$Result.GetResult<Prisma.$like_resPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Like_res.
     * @param {like_resUpdateArgs} args - Arguments to update one Like_res.
     * @example
     * // Update one Like_res
     * const like_res = await prisma.like_res.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends like_resUpdateArgs>(args: SelectSubset<T, like_resUpdateArgs<ExtArgs>>): Prisma__like_resClient<$Result.GetResult<Prisma.$like_resPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Like_res.
     * @param {like_resDeleteManyArgs} args - Arguments to filter Like_res to delete.
     * @example
     * // Delete a few Like_res
     * const { count } = await prisma.like_res.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends like_resDeleteManyArgs>(args?: SelectSubset<T, like_resDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Like_res.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {like_resUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Like_res
     * const like_res = await prisma.like_res.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends like_resUpdateManyArgs>(args: SelectSubset<T, like_resUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Like_res.
     * @param {like_resUpsertArgs} args - Arguments to update or create a Like_res.
     * @example
     * // Update or create a Like_res
     * const like_res = await prisma.like_res.upsert({
     *   create: {
     *     // ... data to create a Like_res
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Like_res we want to update
     *   }
     * })
     */
    upsert<T extends like_resUpsertArgs>(args: SelectSubset<T, like_resUpsertArgs<ExtArgs>>): Prisma__like_resClient<$Result.GetResult<Prisma.$like_resPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Like_res.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {like_resCountArgs} args - Arguments to filter Like_res to count.
     * @example
     * // Count the number of Like_res
     * const count = await prisma.like_res.count({
     *   where: {
     *     // ... the filter for the Like_res we want to count
     *   }
     * })
    **/
    count<T extends like_resCountArgs>(
      args?: Subset<T, like_resCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Like_resCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Like_res.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Like_resAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Like_resAggregateArgs>(args: Subset<T, Like_resAggregateArgs>): Prisma.PrismaPromise<GetLike_resAggregateType<T>>

    /**
     * Group by Like_res.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {like_resGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends like_resGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: like_resGroupByArgs['orderBy'] }
        : { orderBy?: like_resGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, like_resGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLike_resGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the like_res model
   */
  readonly fields: like_resFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for like_res.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__like_resClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends like_res$UsersArgs<ExtArgs> = {}>(args?: Subset<T, like_res$UsersArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Restaurants<T extends like_res$RestaurantsArgs<ExtArgs> = {}>(args?: Subset<T, like_res$RestaurantsArgs<ExtArgs>>): Prisma__RestaurantsClient<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the like_res model
   */
  interface like_resFieldRefs {
    readonly id: FieldRef<"like_res", 'Int'>
    readonly user_id: FieldRef<"like_res", 'Int'>
    readonly res_id: FieldRef<"like_res", 'Int'>
    readonly date_like: FieldRef<"like_res", 'DateTime'>
    readonly deletedBy: FieldRef<"like_res", 'Int'>
    readonly isDeleted: FieldRef<"like_res", 'Boolean'>
    readonly deletedAt: FieldRef<"like_res", 'DateTime'>
    readonly createdAt: FieldRef<"like_res", 'DateTime'>
    readonly updatedAt: FieldRef<"like_res", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * like_res findUnique
   */
  export type like_resFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_res
     */
    select?: like_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like_res
     */
    omit?: like_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: like_resInclude<ExtArgs> | null
    /**
     * Filter, which like_res to fetch.
     */
    where: like_resWhereUniqueInput
  }

  /**
   * like_res findUniqueOrThrow
   */
  export type like_resFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_res
     */
    select?: like_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like_res
     */
    omit?: like_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: like_resInclude<ExtArgs> | null
    /**
     * Filter, which like_res to fetch.
     */
    where: like_resWhereUniqueInput
  }

  /**
   * like_res findFirst
   */
  export type like_resFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_res
     */
    select?: like_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like_res
     */
    omit?: like_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: like_resInclude<ExtArgs> | null
    /**
     * Filter, which like_res to fetch.
     */
    where?: like_resWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of like_res to fetch.
     */
    orderBy?: like_resOrderByWithRelationInput | like_resOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for like_res.
     */
    cursor?: like_resWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` like_res from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` like_res.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of like_res.
     */
    distinct?: Like_resScalarFieldEnum | Like_resScalarFieldEnum[]
  }

  /**
   * like_res findFirstOrThrow
   */
  export type like_resFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_res
     */
    select?: like_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like_res
     */
    omit?: like_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: like_resInclude<ExtArgs> | null
    /**
     * Filter, which like_res to fetch.
     */
    where?: like_resWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of like_res to fetch.
     */
    orderBy?: like_resOrderByWithRelationInput | like_resOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for like_res.
     */
    cursor?: like_resWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` like_res from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` like_res.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of like_res.
     */
    distinct?: Like_resScalarFieldEnum | Like_resScalarFieldEnum[]
  }

  /**
   * like_res findMany
   */
  export type like_resFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_res
     */
    select?: like_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like_res
     */
    omit?: like_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: like_resInclude<ExtArgs> | null
    /**
     * Filter, which like_res to fetch.
     */
    where?: like_resWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of like_res to fetch.
     */
    orderBy?: like_resOrderByWithRelationInput | like_resOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing like_res.
     */
    cursor?: like_resWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` like_res from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` like_res.
     */
    skip?: number
    distinct?: Like_resScalarFieldEnum | Like_resScalarFieldEnum[]
  }

  /**
   * like_res create
   */
  export type like_resCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_res
     */
    select?: like_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like_res
     */
    omit?: like_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: like_resInclude<ExtArgs> | null
    /**
     * The data needed to create a like_res.
     */
    data?: XOR<like_resCreateInput, like_resUncheckedCreateInput>
  }

  /**
   * like_res createMany
   */
  export type like_resCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many like_res.
     */
    data: like_resCreateManyInput | like_resCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * like_res update
   */
  export type like_resUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_res
     */
    select?: like_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like_res
     */
    omit?: like_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: like_resInclude<ExtArgs> | null
    /**
     * The data needed to update a like_res.
     */
    data: XOR<like_resUpdateInput, like_resUncheckedUpdateInput>
    /**
     * Choose, which like_res to update.
     */
    where: like_resWhereUniqueInput
  }

  /**
   * like_res updateMany
   */
  export type like_resUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update like_res.
     */
    data: XOR<like_resUpdateManyMutationInput, like_resUncheckedUpdateManyInput>
    /**
     * Filter which like_res to update
     */
    where?: like_resWhereInput
    /**
     * Limit how many like_res to update.
     */
    limit?: number
  }

  /**
   * like_res upsert
   */
  export type like_resUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_res
     */
    select?: like_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like_res
     */
    omit?: like_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: like_resInclude<ExtArgs> | null
    /**
     * The filter to search for the like_res to update in case it exists.
     */
    where: like_resWhereUniqueInput
    /**
     * In case the like_res found by the `where` argument doesn't exist, create a new like_res with this data.
     */
    create: XOR<like_resCreateInput, like_resUncheckedCreateInput>
    /**
     * In case the like_res was found with the provided `where` argument, update it with this data.
     */
    update: XOR<like_resUpdateInput, like_resUncheckedUpdateInput>
  }

  /**
   * like_res delete
   */
  export type like_resDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_res
     */
    select?: like_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like_res
     */
    omit?: like_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: like_resInclude<ExtArgs> | null
    /**
     * Filter which like_res to delete.
     */
    where: like_resWhereUniqueInput
  }

  /**
   * like_res deleteMany
   */
  export type like_resDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which like_res to delete
     */
    where?: like_resWhereInput
    /**
     * Limit how many like_res to delete.
     */
    limit?: number
  }

  /**
   * like_res.Users
   */
  export type like_res$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * like_res.Restaurants
   */
  export type like_res$RestaurantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurants
     */
    select?: RestaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurants
     */
    omit?: RestaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantsInclude<ExtArgs> | null
    where?: RestaurantsWhereInput
  }

  /**
   * like_res without action
   */
  export type like_resDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_res
     */
    select?: like_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like_res
     */
    omit?: like_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: like_resInclude<ExtArgs> | null
  }


  /**
   * Model orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    food_id: number | null
    amount: number | null
    deletedBy: number | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    food_id: number | null
    amount: number | null
    deletedBy: number | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    food_id: number | null
    amount: number | null
    code: string | null
    arr_sub_id: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    food_id: number | null
    amount: number | null
    code: string | null
    arr_sub_id: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    user_id: number
    food_id: number
    amount: number
    code: number
    arr_sub_id: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    user_id?: true
    food_id?: true
    amount?: true
    deletedBy?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    user_id?: true
    food_id?: true
    amount?: true
    deletedBy?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    user_id?: true
    food_id?: true
    amount?: true
    code?: true
    arr_sub_id?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    user_id?: true
    food_id?: true
    amount?: true
    code?: true
    arr_sub_id?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    user_id?: true
    food_id?: true
    amount?: true
    code?: true
    arr_sub_id?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithAggregationInput | ordersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: number
    user_id: number | null
    food_id: number | null
    amount: number | null
    code: string | null
    arr_sub_id: string | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    food_id?: boolean
    amount?: boolean
    code?: boolean
    arr_sub_id?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Users?: boolean | orders$UsersArgs<ExtArgs>
    foods?: boolean | orders$foodsArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>



  export type ordersSelectScalar = {
    id?: boolean
    user_id?: boolean
    food_id?: boolean
    amount?: boolean
    code?: boolean
    arr_sub_id?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ordersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "food_id" | "amount" | "code" | "arr_sub_id" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["orders"]>
  export type ordersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | orders$UsersArgs<ExtArgs>
    foods?: boolean | orders$foodsArgs<ExtArgs>
  }

  export type $ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orders"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs> | null
      foods: Prisma.$foodsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      food_id: number | null
      amount: number | null
      code: string | null
      arr_sub_id: string | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = $Result.GetResult<Prisma.$ordersPayload, S>

  type ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orders'], meta: { name: 'orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ordersFindUniqueArgs>(args: SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(args: SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ordersFindFirstArgs>(args?: SelectSubset<T, ordersFindFirstArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(args?: SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ordersFindManyArgs>(args?: SelectSubset<T, ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends ordersCreateArgs>(args: SelectSubset<T, ordersCreateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ordersCreateManyArgs>(args?: SelectSubset<T, ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends ordersDeleteArgs>(args: SelectSubset<T, ordersDeleteArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ordersUpdateArgs>(args: SelectSubset<T, ordersUpdateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ordersDeleteManyArgs>(args?: SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ordersUpdateManyArgs>(args: SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends ordersUpsertArgs>(args: SelectSubset<T, ordersUpsertArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordersGroupByArgs['orderBy'] }
        : { orderBy?: ordersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orders model
   */
  readonly fields: ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends orders$UsersArgs<ExtArgs> = {}>(args?: Subset<T, orders$UsersArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    foods<T extends orders$foodsArgs<ExtArgs> = {}>(args?: Subset<T, orders$foodsArgs<ExtArgs>>): Prisma__foodsClient<$Result.GetResult<Prisma.$foodsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the orders model
   */
  interface ordersFieldRefs {
    readonly id: FieldRef<"orders", 'Int'>
    readonly user_id: FieldRef<"orders", 'Int'>
    readonly food_id: FieldRef<"orders", 'Int'>
    readonly amount: FieldRef<"orders", 'Int'>
    readonly code: FieldRef<"orders", 'String'>
    readonly arr_sub_id: FieldRef<"orders", 'String'>
    readonly deletedBy: FieldRef<"orders", 'Int'>
    readonly isDeleted: FieldRef<"orders", 'Boolean'>
    readonly deletedAt: FieldRef<"orders", 'DateTime'>
    readonly createdAt: FieldRef<"orders", 'DateTime'>
    readonly updatedAt: FieldRef<"orders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findMany
   */
  export type ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders create
   */
  export type ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to create a orders.
     */
    data?: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }

  /**
   * orders createMany
   */
  export type ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orders update
   */
  export type ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * orders upsert
   */
  export type ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }

  /**
   * orders delete
   */
  export type ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * orders.Users
   */
  export type orders$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * orders.foods
   */
  export type orders$foodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foods
     */
    select?: foodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the foods
     */
    omit?: foodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodsInclude<ExtArgs> | null
    where?: foodsWhereInput
  }

  /**
   * orders without action
   */
  export type ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
  }


  /**
   * Model rate_res
   */

  export type AggregateRate_res = {
    _count: Rate_resCountAggregateOutputType | null
    _avg: Rate_resAvgAggregateOutputType | null
    _sum: Rate_resSumAggregateOutputType | null
    _min: Rate_resMinAggregateOutputType | null
    _max: Rate_resMaxAggregateOutputType | null
  }

  export type Rate_resAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    res_id: number | null
    amount: number | null
    deletedBy: number | null
  }

  export type Rate_resSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    res_id: number | null
    amount: number | null
    deletedBy: number | null
  }

  export type Rate_resMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    res_id: number | null
    amount: number | null
    date_rate: Date | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Rate_resMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    res_id: number | null
    amount: number | null
    date_rate: Date | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Rate_resCountAggregateOutputType = {
    id: number
    user_id: number
    res_id: number
    amount: number
    date_rate: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Rate_resAvgAggregateInputType = {
    id?: true
    user_id?: true
    res_id?: true
    amount?: true
    deletedBy?: true
  }

  export type Rate_resSumAggregateInputType = {
    id?: true
    user_id?: true
    res_id?: true
    amount?: true
    deletedBy?: true
  }

  export type Rate_resMinAggregateInputType = {
    id?: true
    user_id?: true
    res_id?: true
    amount?: true
    date_rate?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Rate_resMaxAggregateInputType = {
    id?: true
    user_id?: true
    res_id?: true
    amount?: true
    date_rate?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Rate_resCountAggregateInputType = {
    id?: true
    user_id?: true
    res_id?: true
    amount?: true
    date_rate?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Rate_resAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rate_res to aggregate.
     */
    where?: rate_resWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rate_res to fetch.
     */
    orderBy?: rate_resOrderByWithRelationInput | rate_resOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rate_resWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rate_res from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rate_res.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rate_res
    **/
    _count?: true | Rate_resCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Rate_resAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Rate_resSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rate_resMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rate_resMaxAggregateInputType
  }

  export type GetRate_resAggregateType<T extends Rate_resAggregateArgs> = {
        [P in keyof T & keyof AggregateRate_res]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRate_res[P]>
      : GetScalarType<T[P], AggregateRate_res[P]>
  }




  export type rate_resGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rate_resWhereInput
    orderBy?: rate_resOrderByWithAggregationInput | rate_resOrderByWithAggregationInput[]
    by: Rate_resScalarFieldEnum[] | Rate_resScalarFieldEnum
    having?: rate_resScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rate_resCountAggregateInputType | true
    _avg?: Rate_resAvgAggregateInputType
    _sum?: Rate_resSumAggregateInputType
    _min?: Rate_resMinAggregateInputType
    _max?: Rate_resMaxAggregateInputType
  }

  export type Rate_resGroupByOutputType = {
    id: number
    user_id: number | null
    res_id: number | null
    amount: number | null
    date_rate: Date | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: Rate_resCountAggregateOutputType | null
    _avg: Rate_resAvgAggregateOutputType | null
    _sum: Rate_resSumAggregateOutputType | null
    _min: Rate_resMinAggregateOutputType | null
    _max: Rate_resMaxAggregateOutputType | null
  }

  type GetRate_resGroupByPayload<T extends rate_resGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Rate_resGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rate_resGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rate_resGroupByOutputType[P]>
            : GetScalarType<T[P], Rate_resGroupByOutputType[P]>
        }
      >
    >


  export type rate_resSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    res_id?: boolean
    amount?: boolean
    date_rate?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Users?: boolean | rate_res$UsersArgs<ExtArgs>
    Restaurants?: boolean | rate_res$RestaurantsArgs<ExtArgs>
  }, ExtArgs["result"]["rate_res"]>



  export type rate_resSelectScalar = {
    id?: boolean
    user_id?: boolean
    res_id?: boolean
    amount?: boolean
    date_rate?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type rate_resOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "res_id" | "amount" | "date_rate" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["rate_res"]>
  export type rate_resInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | rate_res$UsersArgs<ExtArgs>
    Restaurants?: boolean | rate_res$RestaurantsArgs<ExtArgs>
  }

  export type $rate_resPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rate_res"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs> | null
      Restaurants: Prisma.$RestaurantsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      res_id: number | null
      amount: number | null
      date_rate: Date | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rate_res"]>
    composites: {}
  }

  type rate_resGetPayload<S extends boolean | null | undefined | rate_resDefaultArgs> = $Result.GetResult<Prisma.$rate_resPayload, S>

  type rate_resCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rate_resFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Rate_resCountAggregateInputType | true
    }

  export interface rate_resDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rate_res'], meta: { name: 'rate_res' } }
    /**
     * Find zero or one Rate_res that matches the filter.
     * @param {rate_resFindUniqueArgs} args - Arguments to find a Rate_res
     * @example
     * // Get one Rate_res
     * const rate_res = await prisma.rate_res.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rate_resFindUniqueArgs>(args: SelectSubset<T, rate_resFindUniqueArgs<ExtArgs>>): Prisma__rate_resClient<$Result.GetResult<Prisma.$rate_resPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rate_res that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rate_resFindUniqueOrThrowArgs} args - Arguments to find a Rate_res
     * @example
     * // Get one Rate_res
     * const rate_res = await prisma.rate_res.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rate_resFindUniqueOrThrowArgs>(args: SelectSubset<T, rate_resFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rate_resClient<$Result.GetResult<Prisma.$rate_resPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rate_res that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rate_resFindFirstArgs} args - Arguments to find a Rate_res
     * @example
     * // Get one Rate_res
     * const rate_res = await prisma.rate_res.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rate_resFindFirstArgs>(args?: SelectSubset<T, rate_resFindFirstArgs<ExtArgs>>): Prisma__rate_resClient<$Result.GetResult<Prisma.$rate_resPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rate_res that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rate_resFindFirstOrThrowArgs} args - Arguments to find a Rate_res
     * @example
     * // Get one Rate_res
     * const rate_res = await prisma.rate_res.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rate_resFindFirstOrThrowArgs>(args?: SelectSubset<T, rate_resFindFirstOrThrowArgs<ExtArgs>>): Prisma__rate_resClient<$Result.GetResult<Prisma.$rate_resPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rate_res that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rate_resFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rate_res
     * const rate_res = await prisma.rate_res.findMany()
     * 
     * // Get first 10 Rate_res
     * const rate_res = await prisma.rate_res.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rate_resWithIdOnly = await prisma.rate_res.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rate_resFindManyArgs>(args?: SelectSubset<T, rate_resFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rate_resPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rate_res.
     * @param {rate_resCreateArgs} args - Arguments to create a Rate_res.
     * @example
     * // Create one Rate_res
     * const Rate_res = await prisma.rate_res.create({
     *   data: {
     *     // ... data to create a Rate_res
     *   }
     * })
     * 
     */
    create<T extends rate_resCreateArgs>(args: SelectSubset<T, rate_resCreateArgs<ExtArgs>>): Prisma__rate_resClient<$Result.GetResult<Prisma.$rate_resPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rate_res.
     * @param {rate_resCreateManyArgs} args - Arguments to create many Rate_res.
     * @example
     * // Create many Rate_res
     * const rate_res = await prisma.rate_res.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rate_resCreateManyArgs>(args?: SelectSubset<T, rate_resCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rate_res.
     * @param {rate_resDeleteArgs} args - Arguments to delete one Rate_res.
     * @example
     * // Delete one Rate_res
     * const Rate_res = await prisma.rate_res.delete({
     *   where: {
     *     // ... filter to delete one Rate_res
     *   }
     * })
     * 
     */
    delete<T extends rate_resDeleteArgs>(args: SelectSubset<T, rate_resDeleteArgs<ExtArgs>>): Prisma__rate_resClient<$Result.GetResult<Prisma.$rate_resPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rate_res.
     * @param {rate_resUpdateArgs} args - Arguments to update one Rate_res.
     * @example
     * // Update one Rate_res
     * const rate_res = await prisma.rate_res.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rate_resUpdateArgs>(args: SelectSubset<T, rate_resUpdateArgs<ExtArgs>>): Prisma__rate_resClient<$Result.GetResult<Prisma.$rate_resPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rate_res.
     * @param {rate_resDeleteManyArgs} args - Arguments to filter Rate_res to delete.
     * @example
     * // Delete a few Rate_res
     * const { count } = await prisma.rate_res.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rate_resDeleteManyArgs>(args?: SelectSubset<T, rate_resDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rate_res.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rate_resUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rate_res
     * const rate_res = await prisma.rate_res.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rate_resUpdateManyArgs>(args: SelectSubset<T, rate_resUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rate_res.
     * @param {rate_resUpsertArgs} args - Arguments to update or create a Rate_res.
     * @example
     * // Update or create a Rate_res
     * const rate_res = await prisma.rate_res.upsert({
     *   create: {
     *     // ... data to create a Rate_res
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rate_res we want to update
     *   }
     * })
     */
    upsert<T extends rate_resUpsertArgs>(args: SelectSubset<T, rate_resUpsertArgs<ExtArgs>>): Prisma__rate_resClient<$Result.GetResult<Prisma.$rate_resPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rate_res.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rate_resCountArgs} args - Arguments to filter Rate_res to count.
     * @example
     * // Count the number of Rate_res
     * const count = await prisma.rate_res.count({
     *   where: {
     *     // ... the filter for the Rate_res we want to count
     *   }
     * })
    **/
    count<T extends rate_resCountArgs>(
      args?: Subset<T, rate_resCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rate_resCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rate_res.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rate_resAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Rate_resAggregateArgs>(args: Subset<T, Rate_resAggregateArgs>): Prisma.PrismaPromise<GetRate_resAggregateType<T>>

    /**
     * Group by Rate_res.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rate_resGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rate_resGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rate_resGroupByArgs['orderBy'] }
        : { orderBy?: rate_resGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rate_resGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRate_resGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rate_res model
   */
  readonly fields: rate_resFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rate_res.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rate_resClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends rate_res$UsersArgs<ExtArgs> = {}>(args?: Subset<T, rate_res$UsersArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Restaurants<T extends rate_res$RestaurantsArgs<ExtArgs> = {}>(args?: Subset<T, rate_res$RestaurantsArgs<ExtArgs>>): Prisma__RestaurantsClient<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the rate_res model
   */
  interface rate_resFieldRefs {
    readonly id: FieldRef<"rate_res", 'Int'>
    readonly user_id: FieldRef<"rate_res", 'Int'>
    readonly res_id: FieldRef<"rate_res", 'Int'>
    readonly amount: FieldRef<"rate_res", 'Int'>
    readonly date_rate: FieldRef<"rate_res", 'DateTime'>
    readonly deletedBy: FieldRef<"rate_res", 'Int'>
    readonly isDeleted: FieldRef<"rate_res", 'Boolean'>
    readonly deletedAt: FieldRef<"rate_res", 'DateTime'>
    readonly createdAt: FieldRef<"rate_res", 'DateTime'>
    readonly updatedAt: FieldRef<"rate_res", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * rate_res findUnique
   */
  export type rate_resFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rate_res
     */
    select?: rate_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rate_res
     */
    omit?: rate_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rate_resInclude<ExtArgs> | null
    /**
     * Filter, which rate_res to fetch.
     */
    where: rate_resWhereUniqueInput
  }

  /**
   * rate_res findUniqueOrThrow
   */
  export type rate_resFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rate_res
     */
    select?: rate_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rate_res
     */
    omit?: rate_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rate_resInclude<ExtArgs> | null
    /**
     * Filter, which rate_res to fetch.
     */
    where: rate_resWhereUniqueInput
  }

  /**
   * rate_res findFirst
   */
  export type rate_resFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rate_res
     */
    select?: rate_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rate_res
     */
    omit?: rate_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rate_resInclude<ExtArgs> | null
    /**
     * Filter, which rate_res to fetch.
     */
    where?: rate_resWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rate_res to fetch.
     */
    orderBy?: rate_resOrderByWithRelationInput | rate_resOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rate_res.
     */
    cursor?: rate_resWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rate_res from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rate_res.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rate_res.
     */
    distinct?: Rate_resScalarFieldEnum | Rate_resScalarFieldEnum[]
  }

  /**
   * rate_res findFirstOrThrow
   */
  export type rate_resFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rate_res
     */
    select?: rate_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rate_res
     */
    omit?: rate_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rate_resInclude<ExtArgs> | null
    /**
     * Filter, which rate_res to fetch.
     */
    where?: rate_resWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rate_res to fetch.
     */
    orderBy?: rate_resOrderByWithRelationInput | rate_resOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rate_res.
     */
    cursor?: rate_resWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rate_res from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rate_res.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rate_res.
     */
    distinct?: Rate_resScalarFieldEnum | Rate_resScalarFieldEnum[]
  }

  /**
   * rate_res findMany
   */
  export type rate_resFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rate_res
     */
    select?: rate_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rate_res
     */
    omit?: rate_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rate_resInclude<ExtArgs> | null
    /**
     * Filter, which rate_res to fetch.
     */
    where?: rate_resWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rate_res to fetch.
     */
    orderBy?: rate_resOrderByWithRelationInput | rate_resOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rate_res.
     */
    cursor?: rate_resWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rate_res from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rate_res.
     */
    skip?: number
    distinct?: Rate_resScalarFieldEnum | Rate_resScalarFieldEnum[]
  }

  /**
   * rate_res create
   */
  export type rate_resCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rate_res
     */
    select?: rate_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rate_res
     */
    omit?: rate_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rate_resInclude<ExtArgs> | null
    /**
     * The data needed to create a rate_res.
     */
    data?: XOR<rate_resCreateInput, rate_resUncheckedCreateInput>
  }

  /**
   * rate_res createMany
   */
  export type rate_resCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rate_res.
     */
    data: rate_resCreateManyInput | rate_resCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rate_res update
   */
  export type rate_resUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rate_res
     */
    select?: rate_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rate_res
     */
    omit?: rate_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rate_resInclude<ExtArgs> | null
    /**
     * The data needed to update a rate_res.
     */
    data: XOR<rate_resUpdateInput, rate_resUncheckedUpdateInput>
    /**
     * Choose, which rate_res to update.
     */
    where: rate_resWhereUniqueInput
  }

  /**
   * rate_res updateMany
   */
  export type rate_resUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rate_res.
     */
    data: XOR<rate_resUpdateManyMutationInput, rate_resUncheckedUpdateManyInput>
    /**
     * Filter which rate_res to update
     */
    where?: rate_resWhereInput
    /**
     * Limit how many rate_res to update.
     */
    limit?: number
  }

  /**
   * rate_res upsert
   */
  export type rate_resUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rate_res
     */
    select?: rate_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rate_res
     */
    omit?: rate_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rate_resInclude<ExtArgs> | null
    /**
     * The filter to search for the rate_res to update in case it exists.
     */
    where: rate_resWhereUniqueInput
    /**
     * In case the rate_res found by the `where` argument doesn't exist, create a new rate_res with this data.
     */
    create: XOR<rate_resCreateInput, rate_resUncheckedCreateInput>
    /**
     * In case the rate_res was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rate_resUpdateInput, rate_resUncheckedUpdateInput>
  }

  /**
   * rate_res delete
   */
  export type rate_resDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rate_res
     */
    select?: rate_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rate_res
     */
    omit?: rate_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rate_resInclude<ExtArgs> | null
    /**
     * Filter which rate_res to delete.
     */
    where: rate_resWhereUniqueInput
  }

  /**
   * rate_res deleteMany
   */
  export type rate_resDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rate_res to delete
     */
    where?: rate_resWhereInput
    /**
     * Limit how many rate_res to delete.
     */
    limit?: number
  }

  /**
   * rate_res.Users
   */
  export type rate_res$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * rate_res.Restaurants
   */
  export type rate_res$RestaurantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurants
     */
    select?: RestaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurants
     */
    omit?: RestaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantsInclude<ExtArgs> | null
    where?: RestaurantsWhereInput
  }

  /**
   * rate_res without action
   */
  export type rate_resDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rate_res
     */
    select?: rate_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rate_res
     */
    omit?: rate_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rate_resInclude<ExtArgs> | null
  }


  /**
   * Model sub_foods
   */

  export type AggregateSub_foods = {
    _count: Sub_foodsCountAggregateOutputType | null
    _avg: Sub_foodsAvgAggregateOutputType | null
    _sum: Sub_foodsSumAggregateOutputType | null
    _min: Sub_foodsMinAggregateOutputType | null
    _max: Sub_foodsMaxAggregateOutputType | null
  }

  export type Sub_foodsAvgAggregateOutputType = {
    id: number | null
    sub_price: number | null
    food_id: number | null
    deletedBy: number | null
  }

  export type Sub_foodsSumAggregateOutputType = {
    id: number | null
    sub_price: number | null
    food_id: number | null
    deletedBy: number | null
  }

  export type Sub_foodsMinAggregateOutputType = {
    id: number | null
    sub_name: string | null
    sub_price: number | null
    food_id: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Sub_foodsMaxAggregateOutputType = {
    id: number | null
    sub_name: string | null
    sub_price: number | null
    food_id: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Sub_foodsCountAggregateOutputType = {
    id: number
    sub_name: number
    sub_price: number
    food_id: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Sub_foodsAvgAggregateInputType = {
    id?: true
    sub_price?: true
    food_id?: true
    deletedBy?: true
  }

  export type Sub_foodsSumAggregateInputType = {
    id?: true
    sub_price?: true
    food_id?: true
    deletedBy?: true
  }

  export type Sub_foodsMinAggregateInputType = {
    id?: true
    sub_name?: true
    sub_price?: true
    food_id?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Sub_foodsMaxAggregateInputType = {
    id?: true
    sub_name?: true
    sub_price?: true
    food_id?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Sub_foodsCountAggregateInputType = {
    id?: true
    sub_name?: true
    sub_price?: true
    food_id?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Sub_foodsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sub_foods to aggregate.
     */
    where?: sub_foodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sub_foods to fetch.
     */
    orderBy?: sub_foodsOrderByWithRelationInput | sub_foodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sub_foodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sub_foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sub_foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sub_foods
    **/
    _count?: true | Sub_foodsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sub_foodsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sub_foodsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sub_foodsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sub_foodsMaxAggregateInputType
  }

  export type GetSub_foodsAggregateType<T extends Sub_foodsAggregateArgs> = {
        [P in keyof T & keyof AggregateSub_foods]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSub_foods[P]>
      : GetScalarType<T[P], AggregateSub_foods[P]>
  }




  export type sub_foodsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sub_foodsWhereInput
    orderBy?: sub_foodsOrderByWithAggregationInput | sub_foodsOrderByWithAggregationInput[]
    by: Sub_foodsScalarFieldEnum[] | Sub_foodsScalarFieldEnum
    having?: sub_foodsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sub_foodsCountAggregateInputType | true
    _avg?: Sub_foodsAvgAggregateInputType
    _sum?: Sub_foodsSumAggregateInputType
    _min?: Sub_foodsMinAggregateInputType
    _max?: Sub_foodsMaxAggregateInputType
  }

  export type Sub_foodsGroupByOutputType = {
    id: number
    sub_name: string | null
    sub_price: number | null
    food_id: number | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: Sub_foodsCountAggregateOutputType | null
    _avg: Sub_foodsAvgAggregateOutputType | null
    _sum: Sub_foodsSumAggregateOutputType | null
    _min: Sub_foodsMinAggregateOutputType | null
    _max: Sub_foodsMaxAggregateOutputType | null
  }

  type GetSub_foodsGroupByPayload<T extends sub_foodsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sub_foodsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sub_foodsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sub_foodsGroupByOutputType[P]>
            : GetScalarType<T[P], Sub_foodsGroupByOutputType[P]>
        }
      >
    >


  export type sub_foodsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sub_name?: boolean
    sub_price?: boolean
    food_id?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    foods?: boolean | sub_foods$foodsArgs<ExtArgs>
  }, ExtArgs["result"]["sub_foods"]>



  export type sub_foodsSelectScalar = {
    id?: boolean
    sub_name?: boolean
    sub_price?: boolean
    food_id?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type sub_foodsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sub_name" | "sub_price" | "food_id" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["sub_foods"]>
  export type sub_foodsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foods?: boolean | sub_foods$foodsArgs<ExtArgs>
  }

  export type $sub_foodsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sub_foods"
    objects: {
      foods: Prisma.$foodsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sub_name: string | null
      sub_price: number | null
      food_id: number | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sub_foods"]>
    composites: {}
  }

  type sub_foodsGetPayload<S extends boolean | null | undefined | sub_foodsDefaultArgs> = $Result.GetResult<Prisma.$sub_foodsPayload, S>

  type sub_foodsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sub_foodsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sub_foodsCountAggregateInputType | true
    }

  export interface sub_foodsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sub_foods'], meta: { name: 'sub_foods' } }
    /**
     * Find zero or one Sub_foods that matches the filter.
     * @param {sub_foodsFindUniqueArgs} args - Arguments to find a Sub_foods
     * @example
     * // Get one Sub_foods
     * const sub_foods = await prisma.sub_foods.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sub_foodsFindUniqueArgs>(args: SelectSubset<T, sub_foodsFindUniqueArgs<ExtArgs>>): Prisma__sub_foodsClient<$Result.GetResult<Prisma.$sub_foodsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sub_foods that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sub_foodsFindUniqueOrThrowArgs} args - Arguments to find a Sub_foods
     * @example
     * // Get one Sub_foods
     * const sub_foods = await prisma.sub_foods.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sub_foodsFindUniqueOrThrowArgs>(args: SelectSubset<T, sub_foodsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sub_foodsClient<$Result.GetResult<Prisma.$sub_foodsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sub_foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_foodsFindFirstArgs} args - Arguments to find a Sub_foods
     * @example
     * // Get one Sub_foods
     * const sub_foods = await prisma.sub_foods.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sub_foodsFindFirstArgs>(args?: SelectSubset<T, sub_foodsFindFirstArgs<ExtArgs>>): Prisma__sub_foodsClient<$Result.GetResult<Prisma.$sub_foodsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sub_foods that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_foodsFindFirstOrThrowArgs} args - Arguments to find a Sub_foods
     * @example
     * // Get one Sub_foods
     * const sub_foods = await prisma.sub_foods.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sub_foodsFindFirstOrThrowArgs>(args?: SelectSubset<T, sub_foodsFindFirstOrThrowArgs<ExtArgs>>): Prisma__sub_foodsClient<$Result.GetResult<Prisma.$sub_foodsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sub_foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_foodsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sub_foods
     * const sub_foods = await prisma.sub_foods.findMany()
     * 
     * // Get first 10 Sub_foods
     * const sub_foods = await prisma.sub_foods.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sub_foodsWithIdOnly = await prisma.sub_foods.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sub_foodsFindManyArgs>(args?: SelectSubset<T, sub_foodsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sub_foodsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sub_foods.
     * @param {sub_foodsCreateArgs} args - Arguments to create a Sub_foods.
     * @example
     * // Create one Sub_foods
     * const Sub_foods = await prisma.sub_foods.create({
     *   data: {
     *     // ... data to create a Sub_foods
     *   }
     * })
     * 
     */
    create<T extends sub_foodsCreateArgs>(args: SelectSubset<T, sub_foodsCreateArgs<ExtArgs>>): Prisma__sub_foodsClient<$Result.GetResult<Prisma.$sub_foodsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sub_foods.
     * @param {sub_foodsCreateManyArgs} args - Arguments to create many Sub_foods.
     * @example
     * // Create many Sub_foods
     * const sub_foods = await prisma.sub_foods.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sub_foodsCreateManyArgs>(args?: SelectSubset<T, sub_foodsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sub_foods.
     * @param {sub_foodsDeleteArgs} args - Arguments to delete one Sub_foods.
     * @example
     * // Delete one Sub_foods
     * const Sub_foods = await prisma.sub_foods.delete({
     *   where: {
     *     // ... filter to delete one Sub_foods
     *   }
     * })
     * 
     */
    delete<T extends sub_foodsDeleteArgs>(args: SelectSubset<T, sub_foodsDeleteArgs<ExtArgs>>): Prisma__sub_foodsClient<$Result.GetResult<Prisma.$sub_foodsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sub_foods.
     * @param {sub_foodsUpdateArgs} args - Arguments to update one Sub_foods.
     * @example
     * // Update one Sub_foods
     * const sub_foods = await prisma.sub_foods.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sub_foodsUpdateArgs>(args: SelectSubset<T, sub_foodsUpdateArgs<ExtArgs>>): Prisma__sub_foodsClient<$Result.GetResult<Prisma.$sub_foodsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sub_foods.
     * @param {sub_foodsDeleteManyArgs} args - Arguments to filter Sub_foods to delete.
     * @example
     * // Delete a few Sub_foods
     * const { count } = await prisma.sub_foods.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sub_foodsDeleteManyArgs>(args?: SelectSubset<T, sub_foodsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sub_foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_foodsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sub_foods
     * const sub_foods = await prisma.sub_foods.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sub_foodsUpdateManyArgs>(args: SelectSubset<T, sub_foodsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sub_foods.
     * @param {sub_foodsUpsertArgs} args - Arguments to update or create a Sub_foods.
     * @example
     * // Update or create a Sub_foods
     * const sub_foods = await prisma.sub_foods.upsert({
     *   create: {
     *     // ... data to create a Sub_foods
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sub_foods we want to update
     *   }
     * })
     */
    upsert<T extends sub_foodsUpsertArgs>(args: SelectSubset<T, sub_foodsUpsertArgs<ExtArgs>>): Prisma__sub_foodsClient<$Result.GetResult<Prisma.$sub_foodsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sub_foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_foodsCountArgs} args - Arguments to filter Sub_foods to count.
     * @example
     * // Count the number of Sub_foods
     * const count = await prisma.sub_foods.count({
     *   where: {
     *     // ... the filter for the Sub_foods we want to count
     *   }
     * })
    **/
    count<T extends sub_foodsCountArgs>(
      args?: Subset<T, sub_foodsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sub_foodsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sub_foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sub_foodsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sub_foodsAggregateArgs>(args: Subset<T, Sub_foodsAggregateArgs>): Prisma.PrismaPromise<GetSub_foodsAggregateType<T>>

    /**
     * Group by Sub_foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_foodsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sub_foodsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sub_foodsGroupByArgs['orderBy'] }
        : { orderBy?: sub_foodsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sub_foodsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSub_foodsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sub_foods model
   */
  readonly fields: sub_foodsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sub_foods.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sub_foodsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    foods<T extends sub_foods$foodsArgs<ExtArgs> = {}>(args?: Subset<T, sub_foods$foodsArgs<ExtArgs>>): Prisma__foodsClient<$Result.GetResult<Prisma.$foodsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sub_foods model
   */
  interface sub_foodsFieldRefs {
    readonly id: FieldRef<"sub_foods", 'Int'>
    readonly sub_name: FieldRef<"sub_foods", 'String'>
    readonly sub_price: FieldRef<"sub_foods", 'Float'>
    readonly food_id: FieldRef<"sub_foods", 'Int'>
    readonly deletedBy: FieldRef<"sub_foods", 'Int'>
    readonly isDeleted: FieldRef<"sub_foods", 'Boolean'>
    readonly deletedAt: FieldRef<"sub_foods", 'DateTime'>
    readonly createdAt: FieldRef<"sub_foods", 'DateTime'>
    readonly updatedAt: FieldRef<"sub_foods", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * sub_foods findUnique
   */
  export type sub_foodsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_foods
     */
    select?: sub_foodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_foods
     */
    omit?: sub_foodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_foodsInclude<ExtArgs> | null
    /**
     * Filter, which sub_foods to fetch.
     */
    where: sub_foodsWhereUniqueInput
  }

  /**
   * sub_foods findUniqueOrThrow
   */
  export type sub_foodsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_foods
     */
    select?: sub_foodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_foods
     */
    omit?: sub_foodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_foodsInclude<ExtArgs> | null
    /**
     * Filter, which sub_foods to fetch.
     */
    where: sub_foodsWhereUniqueInput
  }

  /**
   * sub_foods findFirst
   */
  export type sub_foodsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_foods
     */
    select?: sub_foodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_foods
     */
    omit?: sub_foodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_foodsInclude<ExtArgs> | null
    /**
     * Filter, which sub_foods to fetch.
     */
    where?: sub_foodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sub_foods to fetch.
     */
    orderBy?: sub_foodsOrderByWithRelationInput | sub_foodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sub_foods.
     */
    cursor?: sub_foodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sub_foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sub_foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sub_foods.
     */
    distinct?: Sub_foodsScalarFieldEnum | Sub_foodsScalarFieldEnum[]
  }

  /**
   * sub_foods findFirstOrThrow
   */
  export type sub_foodsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_foods
     */
    select?: sub_foodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_foods
     */
    omit?: sub_foodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_foodsInclude<ExtArgs> | null
    /**
     * Filter, which sub_foods to fetch.
     */
    where?: sub_foodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sub_foods to fetch.
     */
    orderBy?: sub_foodsOrderByWithRelationInput | sub_foodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sub_foods.
     */
    cursor?: sub_foodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sub_foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sub_foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sub_foods.
     */
    distinct?: Sub_foodsScalarFieldEnum | Sub_foodsScalarFieldEnum[]
  }

  /**
   * sub_foods findMany
   */
  export type sub_foodsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_foods
     */
    select?: sub_foodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_foods
     */
    omit?: sub_foodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_foodsInclude<ExtArgs> | null
    /**
     * Filter, which sub_foods to fetch.
     */
    where?: sub_foodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sub_foods to fetch.
     */
    orderBy?: sub_foodsOrderByWithRelationInput | sub_foodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sub_foods.
     */
    cursor?: sub_foodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sub_foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sub_foods.
     */
    skip?: number
    distinct?: Sub_foodsScalarFieldEnum | Sub_foodsScalarFieldEnum[]
  }

  /**
   * sub_foods create
   */
  export type sub_foodsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_foods
     */
    select?: sub_foodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_foods
     */
    omit?: sub_foodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_foodsInclude<ExtArgs> | null
    /**
     * The data needed to create a sub_foods.
     */
    data?: XOR<sub_foodsCreateInput, sub_foodsUncheckedCreateInput>
  }

  /**
   * sub_foods createMany
   */
  export type sub_foodsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sub_foods.
     */
    data: sub_foodsCreateManyInput | sub_foodsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sub_foods update
   */
  export type sub_foodsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_foods
     */
    select?: sub_foodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_foods
     */
    omit?: sub_foodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_foodsInclude<ExtArgs> | null
    /**
     * The data needed to update a sub_foods.
     */
    data: XOR<sub_foodsUpdateInput, sub_foodsUncheckedUpdateInput>
    /**
     * Choose, which sub_foods to update.
     */
    where: sub_foodsWhereUniqueInput
  }

  /**
   * sub_foods updateMany
   */
  export type sub_foodsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sub_foods.
     */
    data: XOR<sub_foodsUpdateManyMutationInput, sub_foodsUncheckedUpdateManyInput>
    /**
     * Filter which sub_foods to update
     */
    where?: sub_foodsWhereInput
    /**
     * Limit how many sub_foods to update.
     */
    limit?: number
  }

  /**
   * sub_foods upsert
   */
  export type sub_foodsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_foods
     */
    select?: sub_foodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_foods
     */
    omit?: sub_foodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_foodsInclude<ExtArgs> | null
    /**
     * The filter to search for the sub_foods to update in case it exists.
     */
    where: sub_foodsWhereUniqueInput
    /**
     * In case the sub_foods found by the `where` argument doesn't exist, create a new sub_foods with this data.
     */
    create: XOR<sub_foodsCreateInput, sub_foodsUncheckedCreateInput>
    /**
     * In case the sub_foods was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sub_foodsUpdateInput, sub_foodsUncheckedUpdateInput>
  }

  /**
   * sub_foods delete
   */
  export type sub_foodsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_foods
     */
    select?: sub_foodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_foods
     */
    omit?: sub_foodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_foodsInclude<ExtArgs> | null
    /**
     * Filter which sub_foods to delete.
     */
    where: sub_foodsWhereUniqueInput
  }

  /**
   * sub_foods deleteMany
   */
  export type sub_foodsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sub_foods to delete
     */
    where?: sub_foodsWhereInput
    /**
     * Limit how many sub_foods to delete.
     */
    limit?: number
  }

  /**
   * sub_foods.foods
   */
  export type sub_foods$foodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foods
     */
    select?: foodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the foods
     */
    omit?: foodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodsInclude<ExtArgs> | null
    where?: foodsWhereInput
  }

  /**
   * sub_foods without action
   */
  export type sub_foodsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_foods
     */
    select?: sub_foodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_foods
     */
    omit?: sub_foodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_foodsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RestaurantsScalarFieldEnum: {
    id: 'id',
    res_name: 'res_name',
    Image: 'Image',
    desc: 'desc',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RestaurantsScalarFieldEnum = (typeof RestaurantsScalarFieldEnum)[keyof typeof RestaurantsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    full_name: 'full_name',
    email: 'email',
    password: 'password',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Food_typeScalarFieldEnum: {
    id: 'id',
    type_name: 'type_name',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Food_typeScalarFieldEnum = (typeof Food_typeScalarFieldEnum)[keyof typeof Food_typeScalarFieldEnum]


  export const FoodsScalarFieldEnum: {
    id: 'id',
    food_name: 'food_name',
    image: 'image',
    price: 'price',
    desc: 'desc',
    type_id: 'type_id',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FoodsScalarFieldEnum = (typeof FoodsScalarFieldEnum)[keyof typeof FoodsScalarFieldEnum]


  export const Like_resScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    res_id: 'res_id',
    date_like: 'date_like',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Like_resScalarFieldEnum = (typeof Like_resScalarFieldEnum)[keyof typeof Like_resScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    food_id: 'food_id',
    amount: 'amount',
    code: 'code',
    arr_sub_id: 'arr_sub_id',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const Rate_resScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    res_id: 'res_id',
    amount: 'amount',
    date_rate: 'date_rate',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Rate_resScalarFieldEnum = (typeof Rate_resScalarFieldEnum)[keyof typeof Rate_resScalarFieldEnum]


  export const Sub_foodsScalarFieldEnum: {
    id: 'id',
    sub_name: 'sub_name',
    sub_price: 'sub_price',
    food_id: 'food_id',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Sub_foodsScalarFieldEnum = (typeof Sub_foodsScalarFieldEnum)[keyof typeof Sub_foodsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const RestaurantsOrderByRelevanceFieldEnum: {
    res_name: 'res_name',
    Image: 'Image',
    desc: 'desc'
  };

  export type RestaurantsOrderByRelevanceFieldEnum = (typeof RestaurantsOrderByRelevanceFieldEnum)[keyof typeof RestaurantsOrderByRelevanceFieldEnum]


  export const UsersOrderByRelevanceFieldEnum: {
    full_name: 'full_name',
    email: 'email',
    password: 'password'
  };

  export type UsersOrderByRelevanceFieldEnum = (typeof UsersOrderByRelevanceFieldEnum)[keyof typeof UsersOrderByRelevanceFieldEnum]


  export const food_typeOrderByRelevanceFieldEnum: {
    type_name: 'type_name'
  };

  export type food_typeOrderByRelevanceFieldEnum = (typeof food_typeOrderByRelevanceFieldEnum)[keyof typeof food_typeOrderByRelevanceFieldEnum]


  export const foodsOrderByRelevanceFieldEnum: {
    food_name: 'food_name',
    image: 'image',
    desc: 'desc'
  };

  export type foodsOrderByRelevanceFieldEnum = (typeof foodsOrderByRelevanceFieldEnum)[keyof typeof foodsOrderByRelevanceFieldEnum]


  export const ordersOrderByRelevanceFieldEnum: {
    code: 'code',
    arr_sub_id: 'arr_sub_id'
  };

  export type ordersOrderByRelevanceFieldEnum = (typeof ordersOrderByRelevanceFieldEnum)[keyof typeof ordersOrderByRelevanceFieldEnum]


  export const sub_foodsOrderByRelevanceFieldEnum: {
    sub_name: 'sub_name'
  };

  export type sub_foodsOrderByRelevanceFieldEnum = (typeof sub_foodsOrderByRelevanceFieldEnum)[keyof typeof sub_foodsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type RestaurantsWhereInput = {
    AND?: RestaurantsWhereInput | RestaurantsWhereInput[]
    OR?: RestaurantsWhereInput[]
    NOT?: RestaurantsWhereInput | RestaurantsWhereInput[]
    id?: IntFilter<"Restaurants"> | number
    res_name?: StringNullableFilter<"Restaurants"> | string | null
    Image?: StringNullableFilter<"Restaurants"> | string | null
    desc?: StringNullableFilter<"Restaurants"> | string | null
    deletedBy?: IntFilter<"Restaurants"> | number
    isDeleted?: BoolFilter<"Restaurants"> | boolean
    deletedAt?: DateTimeNullableFilter<"Restaurants"> | Date | string | null
    createdAt?: DateTimeFilter<"Restaurants"> | Date | string
    updatedAt?: DateTimeFilter<"Restaurants"> | Date | string
    like_res?: Like_resListRelationFilter
    rate_res?: Rate_resListRelationFilter
  }

  export type RestaurantsOrderByWithRelationInput = {
    id?: SortOrder
    res_name?: SortOrderInput | SortOrder
    Image?: SortOrderInput | SortOrder
    desc?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    like_res?: like_resOrderByRelationAggregateInput
    rate_res?: rate_resOrderByRelationAggregateInput
    _relevance?: RestaurantsOrderByRelevanceInput
  }

  export type RestaurantsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RestaurantsWhereInput | RestaurantsWhereInput[]
    OR?: RestaurantsWhereInput[]
    NOT?: RestaurantsWhereInput | RestaurantsWhereInput[]
    res_name?: StringNullableFilter<"Restaurants"> | string | null
    Image?: StringNullableFilter<"Restaurants"> | string | null
    desc?: StringNullableFilter<"Restaurants"> | string | null
    deletedBy?: IntFilter<"Restaurants"> | number
    isDeleted?: BoolFilter<"Restaurants"> | boolean
    deletedAt?: DateTimeNullableFilter<"Restaurants"> | Date | string | null
    createdAt?: DateTimeFilter<"Restaurants"> | Date | string
    updatedAt?: DateTimeFilter<"Restaurants"> | Date | string
    like_res?: Like_resListRelationFilter
    rate_res?: Rate_resListRelationFilter
  }, "id">

  export type RestaurantsOrderByWithAggregationInput = {
    id?: SortOrder
    res_name?: SortOrderInput | SortOrder
    Image?: SortOrderInput | SortOrder
    desc?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RestaurantsCountOrderByAggregateInput
    _avg?: RestaurantsAvgOrderByAggregateInput
    _max?: RestaurantsMaxOrderByAggregateInput
    _min?: RestaurantsMinOrderByAggregateInput
    _sum?: RestaurantsSumOrderByAggregateInput
  }

  export type RestaurantsScalarWhereWithAggregatesInput = {
    AND?: RestaurantsScalarWhereWithAggregatesInput | RestaurantsScalarWhereWithAggregatesInput[]
    OR?: RestaurantsScalarWhereWithAggregatesInput[]
    NOT?: RestaurantsScalarWhereWithAggregatesInput | RestaurantsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Restaurants"> | number
    res_name?: StringNullableWithAggregatesFilter<"Restaurants"> | string | null
    Image?: StringNullableWithAggregatesFilter<"Restaurants"> | string | null
    desc?: StringNullableWithAggregatesFilter<"Restaurants"> | string | null
    deletedBy?: IntWithAggregatesFilter<"Restaurants"> | number
    isDeleted?: BoolWithAggregatesFilter<"Restaurants"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Restaurants"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Restaurants"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Restaurants"> | Date | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    full_name?: StringNullableFilter<"Users"> | string | null
    email?: StringNullableFilter<"Users"> | string | null
    password?: StringNullableFilter<"Users"> | string | null
    deletedBy?: IntFilter<"Users"> | number
    isDeleted?: BoolFilter<"Users"> | boolean
    deletedAt?: DateTimeNullableFilter<"Users"> | Date | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    like_res?: Like_resListRelationFilter
    orders?: OrdersListRelationFilter
    rate_res?: Rate_resListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    full_name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    like_res?: like_resOrderByRelationAggregateInput
    orders?: ordersOrderByRelationAggregateInput
    rate_res?: rate_resOrderByRelationAggregateInput
    _relevance?: UsersOrderByRelevanceInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    full_name?: StringNullableFilter<"Users"> | string | null
    email?: StringNullableFilter<"Users"> | string | null
    password?: StringNullableFilter<"Users"> | string | null
    deletedBy?: IntFilter<"Users"> | number
    isDeleted?: BoolFilter<"Users"> | boolean
    deletedAt?: DateTimeNullableFilter<"Users"> | Date | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    like_res?: Like_resListRelationFilter
    orders?: OrdersListRelationFilter
    rate_res?: Rate_resListRelationFilter
  }, "id">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    full_name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    full_name?: StringNullableWithAggregatesFilter<"Users"> | string | null
    email?: StringNullableWithAggregatesFilter<"Users"> | string | null
    password?: StringNullableWithAggregatesFilter<"Users"> | string | null
    deletedBy?: IntWithAggregatesFilter<"Users"> | number
    isDeleted?: BoolWithAggregatesFilter<"Users"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type food_typeWhereInput = {
    AND?: food_typeWhereInput | food_typeWhereInput[]
    OR?: food_typeWhereInput[]
    NOT?: food_typeWhereInput | food_typeWhereInput[]
    id?: IntFilter<"food_type"> | number
    type_name?: StringNullableFilter<"food_type"> | string | null
    deletedBy?: IntFilter<"food_type"> | number
    isDeleted?: BoolFilter<"food_type"> | boolean
    deletedAt?: DateTimeNullableFilter<"food_type"> | Date | string | null
    createdAt?: DateTimeFilter<"food_type"> | Date | string
    updatedAt?: DateTimeFilter<"food_type"> | Date | string
    foods?: FoodsListRelationFilter
  }

  export type food_typeOrderByWithRelationInput = {
    id?: SortOrder
    type_name?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    foods?: foodsOrderByRelationAggregateInput
    _relevance?: food_typeOrderByRelevanceInput
  }

  export type food_typeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: food_typeWhereInput | food_typeWhereInput[]
    OR?: food_typeWhereInput[]
    NOT?: food_typeWhereInput | food_typeWhereInput[]
    type_name?: StringNullableFilter<"food_type"> | string | null
    deletedBy?: IntFilter<"food_type"> | number
    isDeleted?: BoolFilter<"food_type"> | boolean
    deletedAt?: DateTimeNullableFilter<"food_type"> | Date | string | null
    createdAt?: DateTimeFilter<"food_type"> | Date | string
    updatedAt?: DateTimeFilter<"food_type"> | Date | string
    foods?: FoodsListRelationFilter
  }, "id">

  export type food_typeOrderByWithAggregationInput = {
    id?: SortOrder
    type_name?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: food_typeCountOrderByAggregateInput
    _avg?: food_typeAvgOrderByAggregateInput
    _max?: food_typeMaxOrderByAggregateInput
    _min?: food_typeMinOrderByAggregateInput
    _sum?: food_typeSumOrderByAggregateInput
  }

  export type food_typeScalarWhereWithAggregatesInput = {
    AND?: food_typeScalarWhereWithAggregatesInput | food_typeScalarWhereWithAggregatesInput[]
    OR?: food_typeScalarWhereWithAggregatesInput[]
    NOT?: food_typeScalarWhereWithAggregatesInput | food_typeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"food_type"> | number
    type_name?: StringNullableWithAggregatesFilter<"food_type"> | string | null
    deletedBy?: IntWithAggregatesFilter<"food_type"> | number
    isDeleted?: BoolWithAggregatesFilter<"food_type"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"food_type"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"food_type"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"food_type"> | Date | string
  }

  export type foodsWhereInput = {
    AND?: foodsWhereInput | foodsWhereInput[]
    OR?: foodsWhereInput[]
    NOT?: foodsWhereInput | foodsWhereInput[]
    id?: IntFilter<"foods"> | number
    food_name?: StringNullableFilter<"foods"> | string | null
    image?: StringNullableFilter<"foods"> | string | null
    price?: FloatNullableFilter<"foods"> | number | null
    desc?: StringNullableFilter<"foods"> | string | null
    type_id?: IntNullableFilter<"foods"> | number | null
    deletedBy?: IntFilter<"foods"> | number
    isDeleted?: BoolFilter<"foods"> | boolean
    deletedAt?: DateTimeNullableFilter<"foods"> | Date | string | null
    createdAt?: DateTimeFilter<"foods"> | Date | string
    updatedAt?: DateTimeFilter<"foods"> | Date | string
    food_type?: XOR<Food_typeNullableScalarRelationFilter, food_typeWhereInput> | null
    orders?: OrdersListRelationFilter
    sub_foods?: Sub_foodsListRelationFilter
  }

  export type foodsOrderByWithRelationInput = {
    id?: SortOrder
    food_name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    desc?: SortOrderInput | SortOrder
    type_id?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    food_type?: food_typeOrderByWithRelationInput
    orders?: ordersOrderByRelationAggregateInput
    sub_foods?: sub_foodsOrderByRelationAggregateInput
    _relevance?: foodsOrderByRelevanceInput
  }

  export type foodsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: foodsWhereInput | foodsWhereInput[]
    OR?: foodsWhereInput[]
    NOT?: foodsWhereInput | foodsWhereInput[]
    food_name?: StringNullableFilter<"foods"> | string | null
    image?: StringNullableFilter<"foods"> | string | null
    price?: FloatNullableFilter<"foods"> | number | null
    desc?: StringNullableFilter<"foods"> | string | null
    type_id?: IntNullableFilter<"foods"> | number | null
    deletedBy?: IntFilter<"foods"> | number
    isDeleted?: BoolFilter<"foods"> | boolean
    deletedAt?: DateTimeNullableFilter<"foods"> | Date | string | null
    createdAt?: DateTimeFilter<"foods"> | Date | string
    updatedAt?: DateTimeFilter<"foods"> | Date | string
    food_type?: XOR<Food_typeNullableScalarRelationFilter, food_typeWhereInput> | null
    orders?: OrdersListRelationFilter
    sub_foods?: Sub_foodsListRelationFilter
  }, "id">

  export type foodsOrderByWithAggregationInput = {
    id?: SortOrder
    food_name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    desc?: SortOrderInput | SortOrder
    type_id?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: foodsCountOrderByAggregateInput
    _avg?: foodsAvgOrderByAggregateInput
    _max?: foodsMaxOrderByAggregateInput
    _min?: foodsMinOrderByAggregateInput
    _sum?: foodsSumOrderByAggregateInput
  }

  export type foodsScalarWhereWithAggregatesInput = {
    AND?: foodsScalarWhereWithAggregatesInput | foodsScalarWhereWithAggregatesInput[]
    OR?: foodsScalarWhereWithAggregatesInput[]
    NOT?: foodsScalarWhereWithAggregatesInput | foodsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"foods"> | number
    food_name?: StringNullableWithAggregatesFilter<"foods"> | string | null
    image?: StringNullableWithAggregatesFilter<"foods"> | string | null
    price?: FloatNullableWithAggregatesFilter<"foods"> | number | null
    desc?: StringNullableWithAggregatesFilter<"foods"> | string | null
    type_id?: IntNullableWithAggregatesFilter<"foods"> | number | null
    deletedBy?: IntWithAggregatesFilter<"foods"> | number
    isDeleted?: BoolWithAggregatesFilter<"foods"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"foods"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"foods"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"foods"> | Date | string
  }

  export type like_resWhereInput = {
    AND?: like_resWhereInput | like_resWhereInput[]
    OR?: like_resWhereInput[]
    NOT?: like_resWhereInput | like_resWhereInput[]
    id?: IntFilter<"like_res"> | number
    user_id?: IntNullableFilter<"like_res"> | number | null
    res_id?: IntNullableFilter<"like_res"> | number | null
    date_like?: DateTimeNullableFilter<"like_res"> | Date | string | null
    deletedBy?: IntFilter<"like_res"> | number
    isDeleted?: BoolFilter<"like_res"> | boolean
    deletedAt?: DateTimeNullableFilter<"like_res"> | Date | string | null
    createdAt?: DateTimeFilter<"like_res"> | Date | string
    updatedAt?: DateTimeFilter<"like_res"> | Date | string
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    Restaurants?: XOR<RestaurantsNullableScalarRelationFilter, RestaurantsWhereInput> | null
  }

  export type like_resOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    res_id?: SortOrderInput | SortOrder
    date_like?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Users?: UsersOrderByWithRelationInput
    Restaurants?: RestaurantsOrderByWithRelationInput
  }

  export type like_resWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: like_resWhereInput | like_resWhereInput[]
    OR?: like_resWhereInput[]
    NOT?: like_resWhereInput | like_resWhereInput[]
    user_id?: IntNullableFilter<"like_res"> | number | null
    res_id?: IntNullableFilter<"like_res"> | number | null
    date_like?: DateTimeNullableFilter<"like_res"> | Date | string | null
    deletedBy?: IntFilter<"like_res"> | number
    isDeleted?: BoolFilter<"like_res"> | boolean
    deletedAt?: DateTimeNullableFilter<"like_res"> | Date | string | null
    createdAt?: DateTimeFilter<"like_res"> | Date | string
    updatedAt?: DateTimeFilter<"like_res"> | Date | string
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    Restaurants?: XOR<RestaurantsNullableScalarRelationFilter, RestaurantsWhereInput> | null
  }, "id">

  export type like_resOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    res_id?: SortOrderInput | SortOrder
    date_like?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: like_resCountOrderByAggregateInput
    _avg?: like_resAvgOrderByAggregateInput
    _max?: like_resMaxOrderByAggregateInput
    _min?: like_resMinOrderByAggregateInput
    _sum?: like_resSumOrderByAggregateInput
  }

  export type like_resScalarWhereWithAggregatesInput = {
    AND?: like_resScalarWhereWithAggregatesInput | like_resScalarWhereWithAggregatesInput[]
    OR?: like_resScalarWhereWithAggregatesInput[]
    NOT?: like_resScalarWhereWithAggregatesInput | like_resScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"like_res"> | number
    user_id?: IntNullableWithAggregatesFilter<"like_res"> | number | null
    res_id?: IntNullableWithAggregatesFilter<"like_res"> | number | null
    date_like?: DateTimeNullableWithAggregatesFilter<"like_res"> | Date | string | null
    deletedBy?: IntWithAggregatesFilter<"like_res"> | number
    isDeleted?: BoolWithAggregatesFilter<"like_res"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"like_res"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"like_res"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"like_res"> | Date | string
  }

  export type ordersWhereInput = {
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    id?: IntFilter<"orders"> | number
    user_id?: IntNullableFilter<"orders"> | number | null
    food_id?: IntNullableFilter<"orders"> | number | null
    amount?: IntNullableFilter<"orders"> | number | null
    code?: StringNullableFilter<"orders"> | string | null
    arr_sub_id?: StringNullableFilter<"orders"> | string | null
    deletedBy?: IntFilter<"orders"> | number
    isDeleted?: BoolFilter<"orders"> | boolean
    deletedAt?: DateTimeNullableFilter<"orders"> | Date | string | null
    createdAt?: DateTimeFilter<"orders"> | Date | string
    updatedAt?: DateTimeFilter<"orders"> | Date | string
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    foods?: XOR<FoodsNullableScalarRelationFilter, foodsWhereInput> | null
  }

  export type ordersOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    food_id?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    arr_sub_id?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Users?: UsersOrderByWithRelationInput
    foods?: foodsOrderByWithRelationInput
    _relevance?: ordersOrderByRelevanceInput
  }

  export type ordersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    user_id?: IntNullableFilter<"orders"> | number | null
    food_id?: IntNullableFilter<"orders"> | number | null
    amount?: IntNullableFilter<"orders"> | number | null
    code?: StringNullableFilter<"orders"> | string | null
    arr_sub_id?: StringNullableFilter<"orders"> | string | null
    deletedBy?: IntFilter<"orders"> | number
    isDeleted?: BoolFilter<"orders"> | boolean
    deletedAt?: DateTimeNullableFilter<"orders"> | Date | string | null
    createdAt?: DateTimeFilter<"orders"> | Date | string
    updatedAt?: DateTimeFilter<"orders"> | Date | string
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    foods?: XOR<FoodsNullableScalarRelationFilter, foodsWhereInput> | null
  }, "id">

  export type ordersOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    food_id?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    arr_sub_id?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ordersCountOrderByAggregateInput
    _avg?: ordersAvgOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
    _sum?: ordersSumOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    OR?: ordersScalarWhereWithAggregatesInput[]
    NOT?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"orders"> | number
    user_id?: IntNullableWithAggregatesFilter<"orders"> | number | null
    food_id?: IntNullableWithAggregatesFilter<"orders"> | number | null
    amount?: IntNullableWithAggregatesFilter<"orders"> | number | null
    code?: StringNullableWithAggregatesFilter<"orders"> | string | null
    arr_sub_id?: StringNullableWithAggregatesFilter<"orders"> | string | null
    deletedBy?: IntWithAggregatesFilter<"orders"> | number
    isDeleted?: BoolWithAggregatesFilter<"orders"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"orders"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"orders"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"orders"> | Date | string
  }

  export type rate_resWhereInput = {
    AND?: rate_resWhereInput | rate_resWhereInput[]
    OR?: rate_resWhereInput[]
    NOT?: rate_resWhereInput | rate_resWhereInput[]
    id?: IntFilter<"rate_res"> | number
    user_id?: IntNullableFilter<"rate_res"> | number | null
    res_id?: IntNullableFilter<"rate_res"> | number | null
    amount?: IntNullableFilter<"rate_res"> | number | null
    date_rate?: DateTimeNullableFilter<"rate_res"> | Date | string | null
    deletedBy?: IntFilter<"rate_res"> | number
    isDeleted?: BoolFilter<"rate_res"> | boolean
    deletedAt?: DateTimeNullableFilter<"rate_res"> | Date | string | null
    createdAt?: DateTimeFilter<"rate_res"> | Date | string
    updatedAt?: DateTimeFilter<"rate_res"> | Date | string
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    Restaurants?: XOR<RestaurantsNullableScalarRelationFilter, RestaurantsWhereInput> | null
  }

  export type rate_resOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    res_id?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    date_rate?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Users?: UsersOrderByWithRelationInput
    Restaurants?: RestaurantsOrderByWithRelationInput
  }

  export type rate_resWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: rate_resWhereInput | rate_resWhereInput[]
    OR?: rate_resWhereInput[]
    NOT?: rate_resWhereInput | rate_resWhereInput[]
    user_id?: IntNullableFilter<"rate_res"> | number | null
    res_id?: IntNullableFilter<"rate_res"> | number | null
    amount?: IntNullableFilter<"rate_res"> | number | null
    date_rate?: DateTimeNullableFilter<"rate_res"> | Date | string | null
    deletedBy?: IntFilter<"rate_res"> | number
    isDeleted?: BoolFilter<"rate_res"> | boolean
    deletedAt?: DateTimeNullableFilter<"rate_res"> | Date | string | null
    createdAt?: DateTimeFilter<"rate_res"> | Date | string
    updatedAt?: DateTimeFilter<"rate_res"> | Date | string
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    Restaurants?: XOR<RestaurantsNullableScalarRelationFilter, RestaurantsWhereInput> | null
  }, "id">

  export type rate_resOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    res_id?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    date_rate?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: rate_resCountOrderByAggregateInput
    _avg?: rate_resAvgOrderByAggregateInput
    _max?: rate_resMaxOrderByAggregateInput
    _min?: rate_resMinOrderByAggregateInput
    _sum?: rate_resSumOrderByAggregateInput
  }

  export type rate_resScalarWhereWithAggregatesInput = {
    AND?: rate_resScalarWhereWithAggregatesInput | rate_resScalarWhereWithAggregatesInput[]
    OR?: rate_resScalarWhereWithAggregatesInput[]
    NOT?: rate_resScalarWhereWithAggregatesInput | rate_resScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"rate_res"> | number
    user_id?: IntNullableWithAggregatesFilter<"rate_res"> | number | null
    res_id?: IntNullableWithAggregatesFilter<"rate_res"> | number | null
    amount?: IntNullableWithAggregatesFilter<"rate_res"> | number | null
    date_rate?: DateTimeNullableWithAggregatesFilter<"rate_res"> | Date | string | null
    deletedBy?: IntWithAggregatesFilter<"rate_res"> | number
    isDeleted?: BoolWithAggregatesFilter<"rate_res"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"rate_res"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"rate_res"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"rate_res"> | Date | string
  }

  export type sub_foodsWhereInput = {
    AND?: sub_foodsWhereInput | sub_foodsWhereInput[]
    OR?: sub_foodsWhereInput[]
    NOT?: sub_foodsWhereInput | sub_foodsWhereInput[]
    id?: IntFilter<"sub_foods"> | number
    sub_name?: StringNullableFilter<"sub_foods"> | string | null
    sub_price?: FloatNullableFilter<"sub_foods"> | number | null
    food_id?: IntNullableFilter<"sub_foods"> | number | null
    deletedBy?: IntFilter<"sub_foods"> | number
    isDeleted?: BoolFilter<"sub_foods"> | boolean
    deletedAt?: DateTimeNullableFilter<"sub_foods"> | Date | string | null
    createdAt?: DateTimeFilter<"sub_foods"> | Date | string
    updatedAt?: DateTimeFilter<"sub_foods"> | Date | string
    foods?: XOR<FoodsNullableScalarRelationFilter, foodsWhereInput> | null
  }

  export type sub_foodsOrderByWithRelationInput = {
    id?: SortOrder
    sub_name?: SortOrderInput | SortOrder
    sub_price?: SortOrderInput | SortOrder
    food_id?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    foods?: foodsOrderByWithRelationInput
    _relevance?: sub_foodsOrderByRelevanceInput
  }

  export type sub_foodsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: sub_foodsWhereInput | sub_foodsWhereInput[]
    OR?: sub_foodsWhereInput[]
    NOT?: sub_foodsWhereInput | sub_foodsWhereInput[]
    sub_name?: StringNullableFilter<"sub_foods"> | string | null
    sub_price?: FloatNullableFilter<"sub_foods"> | number | null
    food_id?: IntNullableFilter<"sub_foods"> | number | null
    deletedBy?: IntFilter<"sub_foods"> | number
    isDeleted?: BoolFilter<"sub_foods"> | boolean
    deletedAt?: DateTimeNullableFilter<"sub_foods"> | Date | string | null
    createdAt?: DateTimeFilter<"sub_foods"> | Date | string
    updatedAt?: DateTimeFilter<"sub_foods"> | Date | string
    foods?: XOR<FoodsNullableScalarRelationFilter, foodsWhereInput> | null
  }, "id">

  export type sub_foodsOrderByWithAggregationInput = {
    id?: SortOrder
    sub_name?: SortOrderInput | SortOrder
    sub_price?: SortOrderInput | SortOrder
    food_id?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: sub_foodsCountOrderByAggregateInput
    _avg?: sub_foodsAvgOrderByAggregateInput
    _max?: sub_foodsMaxOrderByAggregateInput
    _min?: sub_foodsMinOrderByAggregateInput
    _sum?: sub_foodsSumOrderByAggregateInput
  }

  export type sub_foodsScalarWhereWithAggregatesInput = {
    AND?: sub_foodsScalarWhereWithAggregatesInput | sub_foodsScalarWhereWithAggregatesInput[]
    OR?: sub_foodsScalarWhereWithAggregatesInput[]
    NOT?: sub_foodsScalarWhereWithAggregatesInput | sub_foodsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sub_foods"> | number
    sub_name?: StringNullableWithAggregatesFilter<"sub_foods"> | string | null
    sub_price?: FloatNullableWithAggregatesFilter<"sub_foods"> | number | null
    food_id?: IntNullableWithAggregatesFilter<"sub_foods"> | number | null
    deletedBy?: IntWithAggregatesFilter<"sub_foods"> | number
    isDeleted?: BoolWithAggregatesFilter<"sub_foods"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"sub_foods"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"sub_foods"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"sub_foods"> | Date | string
  }

  export type RestaurantsCreateInput = {
    res_name?: string | null
    Image?: string | null
    desc?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    like_res?: like_resCreateNestedManyWithoutRestaurantsInput
    rate_res?: rate_resCreateNestedManyWithoutRestaurantsInput
  }

  export type RestaurantsUncheckedCreateInput = {
    id?: number
    res_name?: string | null
    Image?: string | null
    desc?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    like_res?: like_resUncheckedCreateNestedManyWithoutRestaurantsInput
    rate_res?: rate_resUncheckedCreateNestedManyWithoutRestaurantsInput
  }

  export type RestaurantsUpdateInput = {
    res_name?: NullableStringFieldUpdateOperationsInput | string | null
    Image?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    like_res?: like_resUpdateManyWithoutRestaurantsNestedInput
    rate_res?: rate_resUpdateManyWithoutRestaurantsNestedInput
  }

  export type RestaurantsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    res_name?: NullableStringFieldUpdateOperationsInput | string | null
    Image?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    like_res?: like_resUncheckedUpdateManyWithoutRestaurantsNestedInput
    rate_res?: rate_resUncheckedUpdateManyWithoutRestaurantsNestedInput
  }

  export type RestaurantsCreateManyInput = {
    id?: number
    res_name?: string | null
    Image?: string | null
    desc?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RestaurantsUpdateManyMutationInput = {
    res_name?: NullableStringFieldUpdateOperationsInput | string | null
    Image?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    res_name?: NullableStringFieldUpdateOperationsInput | string | null
    Image?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateInput = {
    full_name?: string | null
    email?: string | null
    password?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    like_res?: like_resCreateNestedManyWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
    rate_res?: rate_resCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    full_name?: string | null
    email?: string | null
    password?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    like_res?: like_resUncheckedCreateNestedManyWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
    rate_res?: rate_resUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersUpdateInput = {
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    like_res?: like_resUpdateManyWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
    rate_res?: rate_resUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    like_res?: like_resUncheckedUpdateManyWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
    rate_res?: rate_resUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    full_name?: string | null
    email?: string | null
    password?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type food_typeCreateInput = {
    type_name?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    foods?: foodsCreateNestedManyWithoutFood_typeInput
  }

  export type food_typeUncheckedCreateInput = {
    id?: number
    type_name?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    foods?: foodsUncheckedCreateNestedManyWithoutFood_typeInput
  }

  export type food_typeUpdateInput = {
    type_name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: foodsUpdateManyWithoutFood_typeNestedInput
  }

  export type food_typeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type_name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: foodsUncheckedUpdateManyWithoutFood_typeNestedInput
  }

  export type food_typeCreateManyInput = {
    id?: number
    type_name?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type food_typeUpdateManyMutationInput = {
    type_name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type food_typeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type_name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type foodsCreateInput = {
    food_name?: string | null
    image?: string | null
    price?: number | null
    desc?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    food_type?: food_typeCreateNestedOneWithoutFoodsInput
    orders?: ordersCreateNestedManyWithoutFoodsInput
    sub_foods?: sub_foodsCreateNestedManyWithoutFoodsInput
  }

  export type foodsUncheckedCreateInput = {
    id?: number
    food_name?: string | null
    image?: string | null
    price?: number | null
    desc?: string | null
    type_id?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: ordersUncheckedCreateNestedManyWithoutFoodsInput
    sub_foods?: sub_foodsUncheckedCreateNestedManyWithoutFoodsInput
  }

  export type foodsUpdateInput = {
    food_name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food_type?: food_typeUpdateOneWithoutFoodsNestedInput
    orders?: ordersUpdateManyWithoutFoodsNestedInput
    sub_foods?: sub_foodsUpdateManyWithoutFoodsNestedInput
  }

  export type foodsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    food_name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUncheckedUpdateManyWithoutFoodsNestedInput
    sub_foods?: sub_foodsUncheckedUpdateManyWithoutFoodsNestedInput
  }

  export type foodsCreateManyInput = {
    id?: number
    food_name?: string | null
    image?: string | null
    price?: number | null
    desc?: string | null
    type_id?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type foodsUpdateManyMutationInput = {
    food_name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type foodsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    food_name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type like_resCreateInput = {
    date_like?: Date | string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersCreateNestedOneWithoutLike_resInput
    Restaurants?: RestaurantsCreateNestedOneWithoutLike_resInput
  }

  export type like_resUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    res_id?: number | null
    date_like?: Date | string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type like_resUpdateInput = {
    date_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneWithoutLike_resNestedInput
    Restaurants?: RestaurantsUpdateOneWithoutLike_resNestedInput
  }

  export type like_resUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    res_id?: NullableIntFieldUpdateOperationsInput | number | null
    date_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type like_resCreateManyInput = {
    id?: number
    user_id?: number | null
    res_id?: number | null
    date_like?: Date | string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type like_resUpdateManyMutationInput = {
    date_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type like_resUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    res_id?: NullableIntFieldUpdateOperationsInput | number | null
    date_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersCreateInput = {
    amount?: number | null
    code?: string | null
    arr_sub_id?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersCreateNestedOneWithoutOrdersInput
    foods?: foodsCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    food_id?: number | null
    amount?: number | null
    code?: string | null
    arr_sub_id?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ordersUpdateInput = {
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    arr_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneWithoutOrdersNestedInput
    foods?: foodsUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    food_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    arr_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersCreateManyInput = {
    id?: number
    user_id?: number | null
    food_id?: number | null
    amount?: number | null
    code?: string | null
    arr_sub_id?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ordersUpdateManyMutationInput = {
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    arr_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    food_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    arr_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rate_resCreateInput = {
    amount?: number | null
    date_rate?: Date | string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersCreateNestedOneWithoutRate_resInput
    Restaurants?: RestaurantsCreateNestedOneWithoutRate_resInput
  }

  export type rate_resUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    res_id?: number | null
    amount?: number | null
    date_rate?: Date | string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type rate_resUpdateInput = {
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    date_rate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneWithoutRate_resNestedInput
    Restaurants?: RestaurantsUpdateOneWithoutRate_resNestedInput
  }

  export type rate_resUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    res_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    date_rate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rate_resCreateManyInput = {
    id?: number
    user_id?: number | null
    res_id?: number | null
    amount?: number | null
    date_rate?: Date | string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type rate_resUpdateManyMutationInput = {
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    date_rate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rate_resUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    res_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    date_rate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sub_foodsCreateInput = {
    sub_name?: string | null
    sub_price?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    foods?: foodsCreateNestedOneWithoutSub_foodsInput
  }

  export type sub_foodsUncheckedCreateInput = {
    id?: number
    sub_name?: string | null
    sub_price?: number | null
    food_id?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type sub_foodsUpdateInput = {
    sub_name?: NullableStringFieldUpdateOperationsInput | string | null
    sub_price?: NullableFloatFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: foodsUpdateOneWithoutSub_foodsNestedInput
  }

  export type sub_foodsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sub_name?: NullableStringFieldUpdateOperationsInput | string | null
    sub_price?: NullableFloatFieldUpdateOperationsInput | number | null
    food_id?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sub_foodsCreateManyInput = {
    id?: number
    sub_name?: string | null
    sub_price?: number | null
    food_id?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type sub_foodsUpdateManyMutationInput = {
    sub_name?: NullableStringFieldUpdateOperationsInput | string | null
    sub_price?: NullableFloatFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sub_foodsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sub_name?: NullableStringFieldUpdateOperationsInput | string | null
    sub_price?: NullableFloatFieldUpdateOperationsInput | number | null
    food_id?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Like_resListRelationFilter = {
    every?: like_resWhereInput
    some?: like_resWhereInput
    none?: like_resWhereInput
  }

  export type Rate_resListRelationFilter = {
    every?: rate_resWhereInput
    some?: rate_resWhereInput
    none?: rate_resWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type like_resOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rate_resOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RestaurantsOrderByRelevanceInput = {
    fields: RestaurantsOrderByRelevanceFieldEnum | RestaurantsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RestaurantsCountOrderByAggregateInput = {
    id?: SortOrder
    res_name?: SortOrder
    Image?: SortOrder
    desc?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestaurantsAvgOrderByAggregateInput = {
    id?: SortOrder
    deletedBy?: SortOrder
  }

  export type RestaurantsMaxOrderByAggregateInput = {
    id?: SortOrder
    res_name?: SortOrder
    Image?: SortOrder
    desc?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestaurantsMinOrderByAggregateInput = {
    id?: SortOrder
    res_name?: SortOrder
    Image?: SortOrder
    desc?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestaurantsSumOrderByAggregateInput = {
    id?: SortOrder
    deletedBy?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type OrdersListRelationFilter = {
    every?: ordersWhereInput
    some?: ordersWhereInput
    none?: ordersWhereInput
  }

  export type ordersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersOrderByRelevanceInput = {
    fields: UsersOrderByRelevanceFieldEnum | UsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
    deletedBy?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
    deletedBy?: SortOrder
  }

  export type FoodsListRelationFilter = {
    every?: foodsWhereInput
    some?: foodsWhereInput
    none?: foodsWhereInput
  }

  export type foodsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type food_typeOrderByRelevanceInput = {
    fields: food_typeOrderByRelevanceFieldEnum | food_typeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type food_typeCountOrderByAggregateInput = {
    id?: SortOrder
    type_name?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type food_typeAvgOrderByAggregateInput = {
    id?: SortOrder
    deletedBy?: SortOrder
  }

  export type food_typeMaxOrderByAggregateInput = {
    id?: SortOrder
    type_name?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type food_typeMinOrderByAggregateInput = {
    id?: SortOrder
    type_name?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type food_typeSumOrderByAggregateInput = {
    id?: SortOrder
    deletedBy?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Food_typeNullableScalarRelationFilter = {
    is?: food_typeWhereInput | null
    isNot?: food_typeWhereInput | null
  }

  export type Sub_foodsListRelationFilter = {
    every?: sub_foodsWhereInput
    some?: sub_foodsWhereInput
    none?: sub_foodsWhereInput
  }

  export type sub_foodsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type foodsOrderByRelevanceInput = {
    fields: foodsOrderByRelevanceFieldEnum | foodsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type foodsCountOrderByAggregateInput = {
    id?: SortOrder
    food_name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    desc?: SortOrder
    type_id?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type foodsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    type_id?: SortOrder
    deletedBy?: SortOrder
  }

  export type foodsMaxOrderByAggregateInput = {
    id?: SortOrder
    food_name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    desc?: SortOrder
    type_id?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type foodsMinOrderByAggregateInput = {
    id?: SortOrder
    food_name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    desc?: SortOrder
    type_id?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type foodsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    type_id?: SortOrder
    deletedBy?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UsersNullableScalarRelationFilter = {
    is?: UsersWhereInput | null
    isNot?: UsersWhereInput | null
  }

  export type RestaurantsNullableScalarRelationFilter = {
    is?: RestaurantsWhereInput | null
    isNot?: RestaurantsWhereInput | null
  }

  export type like_resCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    res_id?: SortOrder
    date_like?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type like_resAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    res_id?: SortOrder
    deletedBy?: SortOrder
  }

  export type like_resMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    res_id?: SortOrder
    date_like?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type like_resMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    res_id?: SortOrder
    date_like?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type like_resSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    res_id?: SortOrder
    deletedBy?: SortOrder
  }

  export type FoodsNullableScalarRelationFilter = {
    is?: foodsWhereInput | null
    isNot?: foodsWhereInput | null
  }

  export type ordersOrderByRelevanceInput = {
    fields: ordersOrderByRelevanceFieldEnum | ordersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ordersCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    food_id?: SortOrder
    amount?: SortOrder
    code?: SortOrder
    arr_sub_id?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ordersAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    food_id?: SortOrder
    amount?: SortOrder
    deletedBy?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    food_id?: SortOrder
    amount?: SortOrder
    code?: SortOrder
    arr_sub_id?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    food_id?: SortOrder
    amount?: SortOrder
    code?: SortOrder
    arr_sub_id?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ordersSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    food_id?: SortOrder
    amount?: SortOrder
    deletedBy?: SortOrder
  }

  export type rate_resCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    res_id?: SortOrder
    amount?: SortOrder
    date_rate?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type rate_resAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    res_id?: SortOrder
    amount?: SortOrder
    deletedBy?: SortOrder
  }

  export type rate_resMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    res_id?: SortOrder
    amount?: SortOrder
    date_rate?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type rate_resMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    res_id?: SortOrder
    amount?: SortOrder
    date_rate?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type rate_resSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    res_id?: SortOrder
    amount?: SortOrder
    deletedBy?: SortOrder
  }

  export type sub_foodsOrderByRelevanceInput = {
    fields: sub_foodsOrderByRelevanceFieldEnum | sub_foodsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sub_foodsCountOrderByAggregateInput = {
    id?: SortOrder
    sub_name?: SortOrder
    sub_price?: SortOrder
    food_id?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sub_foodsAvgOrderByAggregateInput = {
    id?: SortOrder
    sub_price?: SortOrder
    food_id?: SortOrder
    deletedBy?: SortOrder
  }

  export type sub_foodsMaxOrderByAggregateInput = {
    id?: SortOrder
    sub_name?: SortOrder
    sub_price?: SortOrder
    food_id?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sub_foodsMinOrderByAggregateInput = {
    id?: SortOrder
    sub_name?: SortOrder
    sub_price?: SortOrder
    food_id?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sub_foodsSumOrderByAggregateInput = {
    id?: SortOrder
    sub_price?: SortOrder
    food_id?: SortOrder
    deletedBy?: SortOrder
  }

  export type like_resCreateNestedManyWithoutRestaurantsInput = {
    create?: XOR<like_resCreateWithoutRestaurantsInput, like_resUncheckedCreateWithoutRestaurantsInput> | like_resCreateWithoutRestaurantsInput[] | like_resUncheckedCreateWithoutRestaurantsInput[]
    connectOrCreate?: like_resCreateOrConnectWithoutRestaurantsInput | like_resCreateOrConnectWithoutRestaurantsInput[]
    createMany?: like_resCreateManyRestaurantsInputEnvelope
    connect?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
  }

  export type rate_resCreateNestedManyWithoutRestaurantsInput = {
    create?: XOR<rate_resCreateWithoutRestaurantsInput, rate_resUncheckedCreateWithoutRestaurantsInput> | rate_resCreateWithoutRestaurantsInput[] | rate_resUncheckedCreateWithoutRestaurantsInput[]
    connectOrCreate?: rate_resCreateOrConnectWithoutRestaurantsInput | rate_resCreateOrConnectWithoutRestaurantsInput[]
    createMany?: rate_resCreateManyRestaurantsInputEnvelope
    connect?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
  }

  export type like_resUncheckedCreateNestedManyWithoutRestaurantsInput = {
    create?: XOR<like_resCreateWithoutRestaurantsInput, like_resUncheckedCreateWithoutRestaurantsInput> | like_resCreateWithoutRestaurantsInput[] | like_resUncheckedCreateWithoutRestaurantsInput[]
    connectOrCreate?: like_resCreateOrConnectWithoutRestaurantsInput | like_resCreateOrConnectWithoutRestaurantsInput[]
    createMany?: like_resCreateManyRestaurantsInputEnvelope
    connect?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
  }

  export type rate_resUncheckedCreateNestedManyWithoutRestaurantsInput = {
    create?: XOR<rate_resCreateWithoutRestaurantsInput, rate_resUncheckedCreateWithoutRestaurantsInput> | rate_resCreateWithoutRestaurantsInput[] | rate_resUncheckedCreateWithoutRestaurantsInput[]
    connectOrCreate?: rate_resCreateOrConnectWithoutRestaurantsInput | rate_resCreateOrConnectWithoutRestaurantsInput[]
    createMany?: rate_resCreateManyRestaurantsInputEnvelope
    connect?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type like_resUpdateManyWithoutRestaurantsNestedInput = {
    create?: XOR<like_resCreateWithoutRestaurantsInput, like_resUncheckedCreateWithoutRestaurantsInput> | like_resCreateWithoutRestaurantsInput[] | like_resUncheckedCreateWithoutRestaurantsInput[]
    connectOrCreate?: like_resCreateOrConnectWithoutRestaurantsInput | like_resCreateOrConnectWithoutRestaurantsInput[]
    upsert?: like_resUpsertWithWhereUniqueWithoutRestaurantsInput | like_resUpsertWithWhereUniqueWithoutRestaurantsInput[]
    createMany?: like_resCreateManyRestaurantsInputEnvelope
    set?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
    disconnect?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
    delete?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
    connect?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
    update?: like_resUpdateWithWhereUniqueWithoutRestaurantsInput | like_resUpdateWithWhereUniqueWithoutRestaurantsInput[]
    updateMany?: like_resUpdateManyWithWhereWithoutRestaurantsInput | like_resUpdateManyWithWhereWithoutRestaurantsInput[]
    deleteMany?: like_resScalarWhereInput | like_resScalarWhereInput[]
  }

  export type rate_resUpdateManyWithoutRestaurantsNestedInput = {
    create?: XOR<rate_resCreateWithoutRestaurantsInput, rate_resUncheckedCreateWithoutRestaurantsInput> | rate_resCreateWithoutRestaurantsInput[] | rate_resUncheckedCreateWithoutRestaurantsInput[]
    connectOrCreate?: rate_resCreateOrConnectWithoutRestaurantsInput | rate_resCreateOrConnectWithoutRestaurantsInput[]
    upsert?: rate_resUpsertWithWhereUniqueWithoutRestaurantsInput | rate_resUpsertWithWhereUniqueWithoutRestaurantsInput[]
    createMany?: rate_resCreateManyRestaurantsInputEnvelope
    set?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
    disconnect?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
    delete?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
    connect?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
    update?: rate_resUpdateWithWhereUniqueWithoutRestaurantsInput | rate_resUpdateWithWhereUniqueWithoutRestaurantsInput[]
    updateMany?: rate_resUpdateManyWithWhereWithoutRestaurantsInput | rate_resUpdateManyWithWhereWithoutRestaurantsInput[]
    deleteMany?: rate_resScalarWhereInput | rate_resScalarWhereInput[]
  }

  export type like_resUncheckedUpdateManyWithoutRestaurantsNestedInput = {
    create?: XOR<like_resCreateWithoutRestaurantsInput, like_resUncheckedCreateWithoutRestaurantsInput> | like_resCreateWithoutRestaurantsInput[] | like_resUncheckedCreateWithoutRestaurantsInput[]
    connectOrCreate?: like_resCreateOrConnectWithoutRestaurantsInput | like_resCreateOrConnectWithoutRestaurantsInput[]
    upsert?: like_resUpsertWithWhereUniqueWithoutRestaurantsInput | like_resUpsertWithWhereUniqueWithoutRestaurantsInput[]
    createMany?: like_resCreateManyRestaurantsInputEnvelope
    set?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
    disconnect?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
    delete?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
    connect?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
    update?: like_resUpdateWithWhereUniqueWithoutRestaurantsInput | like_resUpdateWithWhereUniqueWithoutRestaurantsInput[]
    updateMany?: like_resUpdateManyWithWhereWithoutRestaurantsInput | like_resUpdateManyWithWhereWithoutRestaurantsInput[]
    deleteMany?: like_resScalarWhereInput | like_resScalarWhereInput[]
  }

  export type rate_resUncheckedUpdateManyWithoutRestaurantsNestedInput = {
    create?: XOR<rate_resCreateWithoutRestaurantsInput, rate_resUncheckedCreateWithoutRestaurantsInput> | rate_resCreateWithoutRestaurantsInput[] | rate_resUncheckedCreateWithoutRestaurantsInput[]
    connectOrCreate?: rate_resCreateOrConnectWithoutRestaurantsInput | rate_resCreateOrConnectWithoutRestaurantsInput[]
    upsert?: rate_resUpsertWithWhereUniqueWithoutRestaurantsInput | rate_resUpsertWithWhereUniqueWithoutRestaurantsInput[]
    createMany?: rate_resCreateManyRestaurantsInputEnvelope
    set?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
    disconnect?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
    delete?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
    connect?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
    update?: rate_resUpdateWithWhereUniqueWithoutRestaurantsInput | rate_resUpdateWithWhereUniqueWithoutRestaurantsInput[]
    updateMany?: rate_resUpdateManyWithWhereWithoutRestaurantsInput | rate_resUpdateManyWithWhereWithoutRestaurantsInput[]
    deleteMany?: rate_resScalarWhereInput | rate_resScalarWhereInput[]
  }

  export type like_resCreateNestedManyWithoutUsersInput = {
    create?: XOR<like_resCreateWithoutUsersInput, like_resUncheckedCreateWithoutUsersInput> | like_resCreateWithoutUsersInput[] | like_resUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: like_resCreateOrConnectWithoutUsersInput | like_resCreateOrConnectWithoutUsersInput[]
    createMany?: like_resCreateManyUsersInputEnvelope
    connect?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
  }

  export type ordersCreateNestedManyWithoutUsersInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type rate_resCreateNestedManyWithoutUsersInput = {
    create?: XOR<rate_resCreateWithoutUsersInput, rate_resUncheckedCreateWithoutUsersInput> | rate_resCreateWithoutUsersInput[] | rate_resUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: rate_resCreateOrConnectWithoutUsersInput | rate_resCreateOrConnectWithoutUsersInput[]
    createMany?: rate_resCreateManyUsersInputEnvelope
    connect?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
  }

  export type like_resUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<like_resCreateWithoutUsersInput, like_resUncheckedCreateWithoutUsersInput> | like_resCreateWithoutUsersInput[] | like_resUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: like_resCreateOrConnectWithoutUsersInput | like_resCreateOrConnectWithoutUsersInput[]
    createMany?: like_resCreateManyUsersInputEnvelope
    connect?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type rate_resUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<rate_resCreateWithoutUsersInput, rate_resUncheckedCreateWithoutUsersInput> | rate_resCreateWithoutUsersInput[] | rate_resUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: rate_resCreateOrConnectWithoutUsersInput | rate_resCreateOrConnectWithoutUsersInput[]
    createMany?: rate_resCreateManyUsersInputEnvelope
    connect?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
  }

  export type like_resUpdateManyWithoutUsersNestedInput = {
    create?: XOR<like_resCreateWithoutUsersInput, like_resUncheckedCreateWithoutUsersInput> | like_resCreateWithoutUsersInput[] | like_resUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: like_resCreateOrConnectWithoutUsersInput | like_resCreateOrConnectWithoutUsersInput[]
    upsert?: like_resUpsertWithWhereUniqueWithoutUsersInput | like_resUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: like_resCreateManyUsersInputEnvelope
    set?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
    disconnect?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
    delete?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
    connect?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
    update?: like_resUpdateWithWhereUniqueWithoutUsersInput | like_resUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: like_resUpdateManyWithWhereWithoutUsersInput | like_resUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: like_resScalarWhereInput | like_resScalarWhereInput[]
  }

  export type ordersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUsersInput | ordersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUsersInput | ordersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUsersInput | ordersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type rate_resUpdateManyWithoutUsersNestedInput = {
    create?: XOR<rate_resCreateWithoutUsersInput, rate_resUncheckedCreateWithoutUsersInput> | rate_resCreateWithoutUsersInput[] | rate_resUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: rate_resCreateOrConnectWithoutUsersInput | rate_resCreateOrConnectWithoutUsersInput[]
    upsert?: rate_resUpsertWithWhereUniqueWithoutUsersInput | rate_resUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: rate_resCreateManyUsersInputEnvelope
    set?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
    disconnect?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
    delete?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
    connect?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
    update?: rate_resUpdateWithWhereUniqueWithoutUsersInput | rate_resUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: rate_resUpdateManyWithWhereWithoutUsersInput | rate_resUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: rate_resScalarWhereInput | rate_resScalarWhereInput[]
  }

  export type like_resUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<like_resCreateWithoutUsersInput, like_resUncheckedCreateWithoutUsersInput> | like_resCreateWithoutUsersInput[] | like_resUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: like_resCreateOrConnectWithoutUsersInput | like_resCreateOrConnectWithoutUsersInput[]
    upsert?: like_resUpsertWithWhereUniqueWithoutUsersInput | like_resUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: like_resCreateManyUsersInputEnvelope
    set?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
    disconnect?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
    delete?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
    connect?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
    update?: like_resUpdateWithWhereUniqueWithoutUsersInput | like_resUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: like_resUpdateManyWithWhereWithoutUsersInput | like_resUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: like_resScalarWhereInput | like_resScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUsersInput | ordersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUsersInput | ordersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUsersInput | ordersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type rate_resUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<rate_resCreateWithoutUsersInput, rate_resUncheckedCreateWithoutUsersInput> | rate_resCreateWithoutUsersInput[] | rate_resUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: rate_resCreateOrConnectWithoutUsersInput | rate_resCreateOrConnectWithoutUsersInput[]
    upsert?: rate_resUpsertWithWhereUniqueWithoutUsersInput | rate_resUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: rate_resCreateManyUsersInputEnvelope
    set?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
    disconnect?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
    delete?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
    connect?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
    update?: rate_resUpdateWithWhereUniqueWithoutUsersInput | rate_resUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: rate_resUpdateManyWithWhereWithoutUsersInput | rate_resUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: rate_resScalarWhereInput | rate_resScalarWhereInput[]
  }

  export type foodsCreateNestedManyWithoutFood_typeInput = {
    create?: XOR<foodsCreateWithoutFood_typeInput, foodsUncheckedCreateWithoutFood_typeInput> | foodsCreateWithoutFood_typeInput[] | foodsUncheckedCreateWithoutFood_typeInput[]
    connectOrCreate?: foodsCreateOrConnectWithoutFood_typeInput | foodsCreateOrConnectWithoutFood_typeInput[]
    createMany?: foodsCreateManyFood_typeInputEnvelope
    connect?: foodsWhereUniqueInput | foodsWhereUniqueInput[]
  }

  export type foodsUncheckedCreateNestedManyWithoutFood_typeInput = {
    create?: XOR<foodsCreateWithoutFood_typeInput, foodsUncheckedCreateWithoutFood_typeInput> | foodsCreateWithoutFood_typeInput[] | foodsUncheckedCreateWithoutFood_typeInput[]
    connectOrCreate?: foodsCreateOrConnectWithoutFood_typeInput | foodsCreateOrConnectWithoutFood_typeInput[]
    createMany?: foodsCreateManyFood_typeInputEnvelope
    connect?: foodsWhereUniqueInput | foodsWhereUniqueInput[]
  }

  export type foodsUpdateManyWithoutFood_typeNestedInput = {
    create?: XOR<foodsCreateWithoutFood_typeInput, foodsUncheckedCreateWithoutFood_typeInput> | foodsCreateWithoutFood_typeInput[] | foodsUncheckedCreateWithoutFood_typeInput[]
    connectOrCreate?: foodsCreateOrConnectWithoutFood_typeInput | foodsCreateOrConnectWithoutFood_typeInput[]
    upsert?: foodsUpsertWithWhereUniqueWithoutFood_typeInput | foodsUpsertWithWhereUniqueWithoutFood_typeInput[]
    createMany?: foodsCreateManyFood_typeInputEnvelope
    set?: foodsWhereUniqueInput | foodsWhereUniqueInput[]
    disconnect?: foodsWhereUniqueInput | foodsWhereUniqueInput[]
    delete?: foodsWhereUniqueInput | foodsWhereUniqueInput[]
    connect?: foodsWhereUniqueInput | foodsWhereUniqueInput[]
    update?: foodsUpdateWithWhereUniqueWithoutFood_typeInput | foodsUpdateWithWhereUniqueWithoutFood_typeInput[]
    updateMany?: foodsUpdateManyWithWhereWithoutFood_typeInput | foodsUpdateManyWithWhereWithoutFood_typeInput[]
    deleteMany?: foodsScalarWhereInput | foodsScalarWhereInput[]
  }

  export type foodsUncheckedUpdateManyWithoutFood_typeNestedInput = {
    create?: XOR<foodsCreateWithoutFood_typeInput, foodsUncheckedCreateWithoutFood_typeInput> | foodsCreateWithoutFood_typeInput[] | foodsUncheckedCreateWithoutFood_typeInput[]
    connectOrCreate?: foodsCreateOrConnectWithoutFood_typeInput | foodsCreateOrConnectWithoutFood_typeInput[]
    upsert?: foodsUpsertWithWhereUniqueWithoutFood_typeInput | foodsUpsertWithWhereUniqueWithoutFood_typeInput[]
    createMany?: foodsCreateManyFood_typeInputEnvelope
    set?: foodsWhereUniqueInput | foodsWhereUniqueInput[]
    disconnect?: foodsWhereUniqueInput | foodsWhereUniqueInput[]
    delete?: foodsWhereUniqueInput | foodsWhereUniqueInput[]
    connect?: foodsWhereUniqueInput | foodsWhereUniqueInput[]
    update?: foodsUpdateWithWhereUniqueWithoutFood_typeInput | foodsUpdateWithWhereUniqueWithoutFood_typeInput[]
    updateMany?: foodsUpdateManyWithWhereWithoutFood_typeInput | foodsUpdateManyWithWhereWithoutFood_typeInput[]
    deleteMany?: foodsScalarWhereInput | foodsScalarWhereInput[]
  }

  export type food_typeCreateNestedOneWithoutFoodsInput = {
    create?: XOR<food_typeCreateWithoutFoodsInput, food_typeUncheckedCreateWithoutFoodsInput>
    connectOrCreate?: food_typeCreateOrConnectWithoutFoodsInput
    connect?: food_typeWhereUniqueInput
  }

  export type ordersCreateNestedManyWithoutFoodsInput = {
    create?: XOR<ordersCreateWithoutFoodsInput, ordersUncheckedCreateWithoutFoodsInput> | ordersCreateWithoutFoodsInput[] | ordersUncheckedCreateWithoutFoodsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutFoodsInput | ordersCreateOrConnectWithoutFoodsInput[]
    createMany?: ordersCreateManyFoodsInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type sub_foodsCreateNestedManyWithoutFoodsInput = {
    create?: XOR<sub_foodsCreateWithoutFoodsInput, sub_foodsUncheckedCreateWithoutFoodsInput> | sub_foodsCreateWithoutFoodsInput[] | sub_foodsUncheckedCreateWithoutFoodsInput[]
    connectOrCreate?: sub_foodsCreateOrConnectWithoutFoodsInput | sub_foodsCreateOrConnectWithoutFoodsInput[]
    createMany?: sub_foodsCreateManyFoodsInputEnvelope
    connect?: sub_foodsWhereUniqueInput | sub_foodsWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutFoodsInput = {
    create?: XOR<ordersCreateWithoutFoodsInput, ordersUncheckedCreateWithoutFoodsInput> | ordersCreateWithoutFoodsInput[] | ordersUncheckedCreateWithoutFoodsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutFoodsInput | ordersCreateOrConnectWithoutFoodsInput[]
    createMany?: ordersCreateManyFoodsInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type sub_foodsUncheckedCreateNestedManyWithoutFoodsInput = {
    create?: XOR<sub_foodsCreateWithoutFoodsInput, sub_foodsUncheckedCreateWithoutFoodsInput> | sub_foodsCreateWithoutFoodsInput[] | sub_foodsUncheckedCreateWithoutFoodsInput[]
    connectOrCreate?: sub_foodsCreateOrConnectWithoutFoodsInput | sub_foodsCreateOrConnectWithoutFoodsInput[]
    createMany?: sub_foodsCreateManyFoodsInputEnvelope
    connect?: sub_foodsWhereUniqueInput | sub_foodsWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type food_typeUpdateOneWithoutFoodsNestedInput = {
    create?: XOR<food_typeCreateWithoutFoodsInput, food_typeUncheckedCreateWithoutFoodsInput>
    connectOrCreate?: food_typeCreateOrConnectWithoutFoodsInput
    upsert?: food_typeUpsertWithoutFoodsInput
    disconnect?: food_typeWhereInput | boolean
    delete?: food_typeWhereInput | boolean
    connect?: food_typeWhereUniqueInput
    update?: XOR<XOR<food_typeUpdateToOneWithWhereWithoutFoodsInput, food_typeUpdateWithoutFoodsInput>, food_typeUncheckedUpdateWithoutFoodsInput>
  }

  export type ordersUpdateManyWithoutFoodsNestedInput = {
    create?: XOR<ordersCreateWithoutFoodsInput, ordersUncheckedCreateWithoutFoodsInput> | ordersCreateWithoutFoodsInput[] | ordersUncheckedCreateWithoutFoodsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutFoodsInput | ordersCreateOrConnectWithoutFoodsInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutFoodsInput | ordersUpsertWithWhereUniqueWithoutFoodsInput[]
    createMany?: ordersCreateManyFoodsInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutFoodsInput | ordersUpdateWithWhereUniqueWithoutFoodsInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutFoodsInput | ordersUpdateManyWithWhereWithoutFoodsInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type sub_foodsUpdateManyWithoutFoodsNestedInput = {
    create?: XOR<sub_foodsCreateWithoutFoodsInput, sub_foodsUncheckedCreateWithoutFoodsInput> | sub_foodsCreateWithoutFoodsInput[] | sub_foodsUncheckedCreateWithoutFoodsInput[]
    connectOrCreate?: sub_foodsCreateOrConnectWithoutFoodsInput | sub_foodsCreateOrConnectWithoutFoodsInput[]
    upsert?: sub_foodsUpsertWithWhereUniqueWithoutFoodsInput | sub_foodsUpsertWithWhereUniqueWithoutFoodsInput[]
    createMany?: sub_foodsCreateManyFoodsInputEnvelope
    set?: sub_foodsWhereUniqueInput | sub_foodsWhereUniqueInput[]
    disconnect?: sub_foodsWhereUniqueInput | sub_foodsWhereUniqueInput[]
    delete?: sub_foodsWhereUniqueInput | sub_foodsWhereUniqueInput[]
    connect?: sub_foodsWhereUniqueInput | sub_foodsWhereUniqueInput[]
    update?: sub_foodsUpdateWithWhereUniqueWithoutFoodsInput | sub_foodsUpdateWithWhereUniqueWithoutFoodsInput[]
    updateMany?: sub_foodsUpdateManyWithWhereWithoutFoodsInput | sub_foodsUpdateManyWithWhereWithoutFoodsInput[]
    deleteMany?: sub_foodsScalarWhereInput | sub_foodsScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ordersUncheckedUpdateManyWithoutFoodsNestedInput = {
    create?: XOR<ordersCreateWithoutFoodsInput, ordersUncheckedCreateWithoutFoodsInput> | ordersCreateWithoutFoodsInput[] | ordersUncheckedCreateWithoutFoodsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutFoodsInput | ordersCreateOrConnectWithoutFoodsInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutFoodsInput | ordersUpsertWithWhereUniqueWithoutFoodsInput[]
    createMany?: ordersCreateManyFoodsInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutFoodsInput | ordersUpdateWithWhereUniqueWithoutFoodsInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutFoodsInput | ordersUpdateManyWithWhereWithoutFoodsInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type sub_foodsUncheckedUpdateManyWithoutFoodsNestedInput = {
    create?: XOR<sub_foodsCreateWithoutFoodsInput, sub_foodsUncheckedCreateWithoutFoodsInput> | sub_foodsCreateWithoutFoodsInput[] | sub_foodsUncheckedCreateWithoutFoodsInput[]
    connectOrCreate?: sub_foodsCreateOrConnectWithoutFoodsInput | sub_foodsCreateOrConnectWithoutFoodsInput[]
    upsert?: sub_foodsUpsertWithWhereUniqueWithoutFoodsInput | sub_foodsUpsertWithWhereUniqueWithoutFoodsInput[]
    createMany?: sub_foodsCreateManyFoodsInputEnvelope
    set?: sub_foodsWhereUniqueInput | sub_foodsWhereUniqueInput[]
    disconnect?: sub_foodsWhereUniqueInput | sub_foodsWhereUniqueInput[]
    delete?: sub_foodsWhereUniqueInput | sub_foodsWhereUniqueInput[]
    connect?: sub_foodsWhereUniqueInput | sub_foodsWhereUniqueInput[]
    update?: sub_foodsUpdateWithWhereUniqueWithoutFoodsInput | sub_foodsUpdateWithWhereUniqueWithoutFoodsInput[]
    updateMany?: sub_foodsUpdateManyWithWhereWithoutFoodsInput | sub_foodsUpdateManyWithWhereWithoutFoodsInput[]
    deleteMany?: sub_foodsScalarWhereInput | sub_foodsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutLike_resInput = {
    create?: XOR<UsersCreateWithoutLike_resInput, UsersUncheckedCreateWithoutLike_resInput>
    connectOrCreate?: UsersCreateOrConnectWithoutLike_resInput
    connect?: UsersWhereUniqueInput
  }

  export type RestaurantsCreateNestedOneWithoutLike_resInput = {
    create?: XOR<RestaurantsCreateWithoutLike_resInput, RestaurantsUncheckedCreateWithoutLike_resInput>
    connectOrCreate?: RestaurantsCreateOrConnectWithoutLike_resInput
    connect?: RestaurantsWhereUniqueInput
  }

  export type UsersUpdateOneWithoutLike_resNestedInput = {
    create?: XOR<UsersCreateWithoutLike_resInput, UsersUncheckedCreateWithoutLike_resInput>
    connectOrCreate?: UsersCreateOrConnectWithoutLike_resInput
    upsert?: UsersUpsertWithoutLike_resInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutLike_resInput, UsersUpdateWithoutLike_resInput>, UsersUncheckedUpdateWithoutLike_resInput>
  }

  export type RestaurantsUpdateOneWithoutLike_resNestedInput = {
    create?: XOR<RestaurantsCreateWithoutLike_resInput, RestaurantsUncheckedCreateWithoutLike_resInput>
    connectOrCreate?: RestaurantsCreateOrConnectWithoutLike_resInput
    upsert?: RestaurantsUpsertWithoutLike_resInput
    disconnect?: RestaurantsWhereInput | boolean
    delete?: RestaurantsWhereInput | boolean
    connect?: RestaurantsWhereUniqueInput
    update?: XOR<XOR<RestaurantsUpdateToOneWithWhereWithoutLike_resInput, RestaurantsUpdateWithoutLike_resInput>, RestaurantsUncheckedUpdateWithoutLike_resInput>
  }

  export type UsersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOrdersInput
    connect?: UsersWhereUniqueInput
  }

  export type foodsCreateNestedOneWithoutOrdersInput = {
    create?: XOR<foodsCreateWithoutOrdersInput, foodsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: foodsCreateOrConnectWithoutOrdersInput
    connect?: foodsWhereUniqueInput
  }

  export type UsersUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOrdersInput
    upsert?: UsersUpsertWithoutOrdersInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutOrdersInput, UsersUpdateWithoutOrdersInput>, UsersUncheckedUpdateWithoutOrdersInput>
  }

  export type foodsUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<foodsCreateWithoutOrdersInput, foodsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: foodsCreateOrConnectWithoutOrdersInput
    upsert?: foodsUpsertWithoutOrdersInput
    disconnect?: foodsWhereInput | boolean
    delete?: foodsWhereInput | boolean
    connect?: foodsWhereUniqueInput
    update?: XOR<XOR<foodsUpdateToOneWithWhereWithoutOrdersInput, foodsUpdateWithoutOrdersInput>, foodsUncheckedUpdateWithoutOrdersInput>
  }

  export type UsersCreateNestedOneWithoutRate_resInput = {
    create?: XOR<UsersCreateWithoutRate_resInput, UsersUncheckedCreateWithoutRate_resInput>
    connectOrCreate?: UsersCreateOrConnectWithoutRate_resInput
    connect?: UsersWhereUniqueInput
  }

  export type RestaurantsCreateNestedOneWithoutRate_resInput = {
    create?: XOR<RestaurantsCreateWithoutRate_resInput, RestaurantsUncheckedCreateWithoutRate_resInput>
    connectOrCreate?: RestaurantsCreateOrConnectWithoutRate_resInput
    connect?: RestaurantsWhereUniqueInput
  }

  export type UsersUpdateOneWithoutRate_resNestedInput = {
    create?: XOR<UsersCreateWithoutRate_resInput, UsersUncheckedCreateWithoutRate_resInput>
    connectOrCreate?: UsersCreateOrConnectWithoutRate_resInput
    upsert?: UsersUpsertWithoutRate_resInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutRate_resInput, UsersUpdateWithoutRate_resInput>, UsersUncheckedUpdateWithoutRate_resInput>
  }

  export type RestaurantsUpdateOneWithoutRate_resNestedInput = {
    create?: XOR<RestaurantsCreateWithoutRate_resInput, RestaurantsUncheckedCreateWithoutRate_resInput>
    connectOrCreate?: RestaurantsCreateOrConnectWithoutRate_resInput
    upsert?: RestaurantsUpsertWithoutRate_resInput
    disconnect?: RestaurantsWhereInput | boolean
    delete?: RestaurantsWhereInput | boolean
    connect?: RestaurantsWhereUniqueInput
    update?: XOR<XOR<RestaurantsUpdateToOneWithWhereWithoutRate_resInput, RestaurantsUpdateWithoutRate_resInput>, RestaurantsUncheckedUpdateWithoutRate_resInput>
  }

  export type foodsCreateNestedOneWithoutSub_foodsInput = {
    create?: XOR<foodsCreateWithoutSub_foodsInput, foodsUncheckedCreateWithoutSub_foodsInput>
    connectOrCreate?: foodsCreateOrConnectWithoutSub_foodsInput
    connect?: foodsWhereUniqueInput
  }

  export type foodsUpdateOneWithoutSub_foodsNestedInput = {
    create?: XOR<foodsCreateWithoutSub_foodsInput, foodsUncheckedCreateWithoutSub_foodsInput>
    connectOrCreate?: foodsCreateOrConnectWithoutSub_foodsInput
    upsert?: foodsUpsertWithoutSub_foodsInput
    disconnect?: foodsWhereInput | boolean
    delete?: foodsWhereInput | boolean
    connect?: foodsWhereUniqueInput
    update?: XOR<XOR<foodsUpdateToOneWithWhereWithoutSub_foodsInput, foodsUpdateWithoutSub_foodsInput>, foodsUncheckedUpdateWithoutSub_foodsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type like_resCreateWithoutRestaurantsInput = {
    date_like?: Date | string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersCreateNestedOneWithoutLike_resInput
  }

  export type like_resUncheckedCreateWithoutRestaurantsInput = {
    id?: number
    user_id?: number | null
    date_like?: Date | string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type like_resCreateOrConnectWithoutRestaurantsInput = {
    where: like_resWhereUniqueInput
    create: XOR<like_resCreateWithoutRestaurantsInput, like_resUncheckedCreateWithoutRestaurantsInput>
  }

  export type like_resCreateManyRestaurantsInputEnvelope = {
    data: like_resCreateManyRestaurantsInput | like_resCreateManyRestaurantsInput[]
    skipDuplicates?: boolean
  }

  export type rate_resCreateWithoutRestaurantsInput = {
    amount?: number | null
    date_rate?: Date | string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersCreateNestedOneWithoutRate_resInput
  }

  export type rate_resUncheckedCreateWithoutRestaurantsInput = {
    id?: number
    user_id?: number | null
    amount?: number | null
    date_rate?: Date | string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type rate_resCreateOrConnectWithoutRestaurantsInput = {
    where: rate_resWhereUniqueInput
    create: XOR<rate_resCreateWithoutRestaurantsInput, rate_resUncheckedCreateWithoutRestaurantsInput>
  }

  export type rate_resCreateManyRestaurantsInputEnvelope = {
    data: rate_resCreateManyRestaurantsInput | rate_resCreateManyRestaurantsInput[]
    skipDuplicates?: boolean
  }

  export type like_resUpsertWithWhereUniqueWithoutRestaurantsInput = {
    where: like_resWhereUniqueInput
    update: XOR<like_resUpdateWithoutRestaurantsInput, like_resUncheckedUpdateWithoutRestaurantsInput>
    create: XOR<like_resCreateWithoutRestaurantsInput, like_resUncheckedCreateWithoutRestaurantsInput>
  }

  export type like_resUpdateWithWhereUniqueWithoutRestaurantsInput = {
    where: like_resWhereUniqueInput
    data: XOR<like_resUpdateWithoutRestaurantsInput, like_resUncheckedUpdateWithoutRestaurantsInput>
  }

  export type like_resUpdateManyWithWhereWithoutRestaurantsInput = {
    where: like_resScalarWhereInput
    data: XOR<like_resUpdateManyMutationInput, like_resUncheckedUpdateManyWithoutRestaurantsInput>
  }

  export type like_resScalarWhereInput = {
    AND?: like_resScalarWhereInput | like_resScalarWhereInput[]
    OR?: like_resScalarWhereInput[]
    NOT?: like_resScalarWhereInput | like_resScalarWhereInput[]
    id?: IntFilter<"like_res"> | number
    user_id?: IntNullableFilter<"like_res"> | number | null
    res_id?: IntNullableFilter<"like_res"> | number | null
    date_like?: DateTimeNullableFilter<"like_res"> | Date | string | null
    deletedBy?: IntFilter<"like_res"> | number
    isDeleted?: BoolFilter<"like_res"> | boolean
    deletedAt?: DateTimeNullableFilter<"like_res"> | Date | string | null
    createdAt?: DateTimeFilter<"like_res"> | Date | string
    updatedAt?: DateTimeFilter<"like_res"> | Date | string
  }

  export type rate_resUpsertWithWhereUniqueWithoutRestaurantsInput = {
    where: rate_resWhereUniqueInput
    update: XOR<rate_resUpdateWithoutRestaurantsInput, rate_resUncheckedUpdateWithoutRestaurantsInput>
    create: XOR<rate_resCreateWithoutRestaurantsInput, rate_resUncheckedCreateWithoutRestaurantsInput>
  }

  export type rate_resUpdateWithWhereUniqueWithoutRestaurantsInput = {
    where: rate_resWhereUniqueInput
    data: XOR<rate_resUpdateWithoutRestaurantsInput, rate_resUncheckedUpdateWithoutRestaurantsInput>
  }

  export type rate_resUpdateManyWithWhereWithoutRestaurantsInput = {
    where: rate_resScalarWhereInput
    data: XOR<rate_resUpdateManyMutationInput, rate_resUncheckedUpdateManyWithoutRestaurantsInput>
  }

  export type rate_resScalarWhereInput = {
    AND?: rate_resScalarWhereInput | rate_resScalarWhereInput[]
    OR?: rate_resScalarWhereInput[]
    NOT?: rate_resScalarWhereInput | rate_resScalarWhereInput[]
    id?: IntFilter<"rate_res"> | number
    user_id?: IntNullableFilter<"rate_res"> | number | null
    res_id?: IntNullableFilter<"rate_res"> | number | null
    amount?: IntNullableFilter<"rate_res"> | number | null
    date_rate?: DateTimeNullableFilter<"rate_res"> | Date | string | null
    deletedBy?: IntFilter<"rate_res"> | number
    isDeleted?: BoolFilter<"rate_res"> | boolean
    deletedAt?: DateTimeNullableFilter<"rate_res"> | Date | string | null
    createdAt?: DateTimeFilter<"rate_res"> | Date | string
    updatedAt?: DateTimeFilter<"rate_res"> | Date | string
  }

  export type like_resCreateWithoutUsersInput = {
    date_like?: Date | string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Restaurants?: RestaurantsCreateNestedOneWithoutLike_resInput
  }

  export type like_resUncheckedCreateWithoutUsersInput = {
    id?: number
    res_id?: number | null
    date_like?: Date | string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type like_resCreateOrConnectWithoutUsersInput = {
    where: like_resWhereUniqueInput
    create: XOR<like_resCreateWithoutUsersInput, like_resUncheckedCreateWithoutUsersInput>
  }

  export type like_resCreateManyUsersInputEnvelope = {
    data: like_resCreateManyUsersInput | like_resCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type ordersCreateWithoutUsersInput = {
    amount?: number | null
    code?: string | null
    arr_sub_id?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    foods?: foodsCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutUsersInput = {
    id?: number
    food_id?: number | null
    amount?: number | null
    code?: string | null
    arr_sub_id?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ordersCreateOrConnectWithoutUsersInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput>
  }

  export type ordersCreateManyUsersInputEnvelope = {
    data: ordersCreateManyUsersInput | ordersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type rate_resCreateWithoutUsersInput = {
    amount?: number | null
    date_rate?: Date | string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Restaurants?: RestaurantsCreateNestedOneWithoutRate_resInput
  }

  export type rate_resUncheckedCreateWithoutUsersInput = {
    id?: number
    res_id?: number | null
    amount?: number | null
    date_rate?: Date | string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type rate_resCreateOrConnectWithoutUsersInput = {
    where: rate_resWhereUniqueInput
    create: XOR<rate_resCreateWithoutUsersInput, rate_resUncheckedCreateWithoutUsersInput>
  }

  export type rate_resCreateManyUsersInputEnvelope = {
    data: rate_resCreateManyUsersInput | rate_resCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type like_resUpsertWithWhereUniqueWithoutUsersInput = {
    where: like_resWhereUniqueInput
    update: XOR<like_resUpdateWithoutUsersInput, like_resUncheckedUpdateWithoutUsersInput>
    create: XOR<like_resCreateWithoutUsersInput, like_resUncheckedCreateWithoutUsersInput>
  }

  export type like_resUpdateWithWhereUniqueWithoutUsersInput = {
    where: like_resWhereUniqueInput
    data: XOR<like_resUpdateWithoutUsersInput, like_resUncheckedUpdateWithoutUsersInput>
  }

  export type like_resUpdateManyWithWhereWithoutUsersInput = {
    where: like_resScalarWhereInput
    data: XOR<like_resUpdateManyMutationInput, like_resUncheckedUpdateManyWithoutUsersInput>
  }

  export type ordersUpsertWithWhereUniqueWithoutUsersInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutUsersInput, ordersUncheckedUpdateWithoutUsersInput>
    create: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutUsersInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutUsersInput, ordersUncheckedUpdateWithoutUsersInput>
  }

  export type ordersUpdateManyWithWhereWithoutUsersInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutUsersInput>
  }

  export type ordersScalarWhereInput = {
    AND?: ordersScalarWhereInput | ordersScalarWhereInput[]
    OR?: ordersScalarWhereInput[]
    NOT?: ordersScalarWhereInput | ordersScalarWhereInput[]
    id?: IntFilter<"orders"> | number
    user_id?: IntNullableFilter<"orders"> | number | null
    food_id?: IntNullableFilter<"orders"> | number | null
    amount?: IntNullableFilter<"orders"> | number | null
    code?: StringNullableFilter<"orders"> | string | null
    arr_sub_id?: StringNullableFilter<"orders"> | string | null
    deletedBy?: IntFilter<"orders"> | number
    isDeleted?: BoolFilter<"orders"> | boolean
    deletedAt?: DateTimeNullableFilter<"orders"> | Date | string | null
    createdAt?: DateTimeFilter<"orders"> | Date | string
    updatedAt?: DateTimeFilter<"orders"> | Date | string
  }

  export type rate_resUpsertWithWhereUniqueWithoutUsersInput = {
    where: rate_resWhereUniqueInput
    update: XOR<rate_resUpdateWithoutUsersInput, rate_resUncheckedUpdateWithoutUsersInput>
    create: XOR<rate_resCreateWithoutUsersInput, rate_resUncheckedCreateWithoutUsersInput>
  }

  export type rate_resUpdateWithWhereUniqueWithoutUsersInput = {
    where: rate_resWhereUniqueInput
    data: XOR<rate_resUpdateWithoutUsersInput, rate_resUncheckedUpdateWithoutUsersInput>
  }

  export type rate_resUpdateManyWithWhereWithoutUsersInput = {
    where: rate_resScalarWhereInput
    data: XOR<rate_resUpdateManyMutationInput, rate_resUncheckedUpdateManyWithoutUsersInput>
  }

  export type foodsCreateWithoutFood_typeInput = {
    food_name?: string | null
    image?: string | null
    price?: number | null
    desc?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: ordersCreateNestedManyWithoutFoodsInput
    sub_foods?: sub_foodsCreateNestedManyWithoutFoodsInput
  }

  export type foodsUncheckedCreateWithoutFood_typeInput = {
    id?: number
    food_name?: string | null
    image?: string | null
    price?: number | null
    desc?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: ordersUncheckedCreateNestedManyWithoutFoodsInput
    sub_foods?: sub_foodsUncheckedCreateNestedManyWithoutFoodsInput
  }

  export type foodsCreateOrConnectWithoutFood_typeInput = {
    where: foodsWhereUniqueInput
    create: XOR<foodsCreateWithoutFood_typeInput, foodsUncheckedCreateWithoutFood_typeInput>
  }

  export type foodsCreateManyFood_typeInputEnvelope = {
    data: foodsCreateManyFood_typeInput | foodsCreateManyFood_typeInput[]
    skipDuplicates?: boolean
  }

  export type foodsUpsertWithWhereUniqueWithoutFood_typeInput = {
    where: foodsWhereUniqueInput
    update: XOR<foodsUpdateWithoutFood_typeInput, foodsUncheckedUpdateWithoutFood_typeInput>
    create: XOR<foodsCreateWithoutFood_typeInput, foodsUncheckedCreateWithoutFood_typeInput>
  }

  export type foodsUpdateWithWhereUniqueWithoutFood_typeInput = {
    where: foodsWhereUniqueInput
    data: XOR<foodsUpdateWithoutFood_typeInput, foodsUncheckedUpdateWithoutFood_typeInput>
  }

  export type foodsUpdateManyWithWhereWithoutFood_typeInput = {
    where: foodsScalarWhereInput
    data: XOR<foodsUpdateManyMutationInput, foodsUncheckedUpdateManyWithoutFood_typeInput>
  }

  export type foodsScalarWhereInput = {
    AND?: foodsScalarWhereInput | foodsScalarWhereInput[]
    OR?: foodsScalarWhereInput[]
    NOT?: foodsScalarWhereInput | foodsScalarWhereInput[]
    id?: IntFilter<"foods"> | number
    food_name?: StringNullableFilter<"foods"> | string | null
    image?: StringNullableFilter<"foods"> | string | null
    price?: FloatNullableFilter<"foods"> | number | null
    desc?: StringNullableFilter<"foods"> | string | null
    type_id?: IntNullableFilter<"foods"> | number | null
    deletedBy?: IntFilter<"foods"> | number
    isDeleted?: BoolFilter<"foods"> | boolean
    deletedAt?: DateTimeNullableFilter<"foods"> | Date | string | null
    createdAt?: DateTimeFilter<"foods"> | Date | string
    updatedAt?: DateTimeFilter<"foods"> | Date | string
  }

  export type food_typeCreateWithoutFoodsInput = {
    type_name?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type food_typeUncheckedCreateWithoutFoodsInput = {
    id?: number
    type_name?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type food_typeCreateOrConnectWithoutFoodsInput = {
    where: food_typeWhereUniqueInput
    create: XOR<food_typeCreateWithoutFoodsInput, food_typeUncheckedCreateWithoutFoodsInput>
  }

  export type ordersCreateWithoutFoodsInput = {
    amount?: number | null
    code?: string | null
    arr_sub_id?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutFoodsInput = {
    id?: number
    user_id?: number | null
    amount?: number | null
    code?: string | null
    arr_sub_id?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ordersCreateOrConnectWithoutFoodsInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutFoodsInput, ordersUncheckedCreateWithoutFoodsInput>
  }

  export type ordersCreateManyFoodsInputEnvelope = {
    data: ordersCreateManyFoodsInput | ordersCreateManyFoodsInput[]
    skipDuplicates?: boolean
  }

  export type sub_foodsCreateWithoutFoodsInput = {
    sub_name?: string | null
    sub_price?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type sub_foodsUncheckedCreateWithoutFoodsInput = {
    id?: number
    sub_name?: string | null
    sub_price?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type sub_foodsCreateOrConnectWithoutFoodsInput = {
    where: sub_foodsWhereUniqueInput
    create: XOR<sub_foodsCreateWithoutFoodsInput, sub_foodsUncheckedCreateWithoutFoodsInput>
  }

  export type sub_foodsCreateManyFoodsInputEnvelope = {
    data: sub_foodsCreateManyFoodsInput | sub_foodsCreateManyFoodsInput[]
    skipDuplicates?: boolean
  }

  export type food_typeUpsertWithoutFoodsInput = {
    update: XOR<food_typeUpdateWithoutFoodsInput, food_typeUncheckedUpdateWithoutFoodsInput>
    create: XOR<food_typeCreateWithoutFoodsInput, food_typeUncheckedCreateWithoutFoodsInput>
    where?: food_typeWhereInput
  }

  export type food_typeUpdateToOneWithWhereWithoutFoodsInput = {
    where?: food_typeWhereInput
    data: XOR<food_typeUpdateWithoutFoodsInput, food_typeUncheckedUpdateWithoutFoodsInput>
  }

  export type food_typeUpdateWithoutFoodsInput = {
    type_name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type food_typeUncheckedUpdateWithoutFoodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    type_name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersUpsertWithWhereUniqueWithoutFoodsInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutFoodsInput, ordersUncheckedUpdateWithoutFoodsInput>
    create: XOR<ordersCreateWithoutFoodsInput, ordersUncheckedCreateWithoutFoodsInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutFoodsInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutFoodsInput, ordersUncheckedUpdateWithoutFoodsInput>
  }

  export type ordersUpdateManyWithWhereWithoutFoodsInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutFoodsInput>
  }

  export type sub_foodsUpsertWithWhereUniqueWithoutFoodsInput = {
    where: sub_foodsWhereUniqueInput
    update: XOR<sub_foodsUpdateWithoutFoodsInput, sub_foodsUncheckedUpdateWithoutFoodsInput>
    create: XOR<sub_foodsCreateWithoutFoodsInput, sub_foodsUncheckedCreateWithoutFoodsInput>
  }

  export type sub_foodsUpdateWithWhereUniqueWithoutFoodsInput = {
    where: sub_foodsWhereUniqueInput
    data: XOR<sub_foodsUpdateWithoutFoodsInput, sub_foodsUncheckedUpdateWithoutFoodsInput>
  }

  export type sub_foodsUpdateManyWithWhereWithoutFoodsInput = {
    where: sub_foodsScalarWhereInput
    data: XOR<sub_foodsUpdateManyMutationInput, sub_foodsUncheckedUpdateManyWithoutFoodsInput>
  }

  export type sub_foodsScalarWhereInput = {
    AND?: sub_foodsScalarWhereInput | sub_foodsScalarWhereInput[]
    OR?: sub_foodsScalarWhereInput[]
    NOT?: sub_foodsScalarWhereInput | sub_foodsScalarWhereInput[]
    id?: IntFilter<"sub_foods"> | number
    sub_name?: StringNullableFilter<"sub_foods"> | string | null
    sub_price?: FloatNullableFilter<"sub_foods"> | number | null
    food_id?: IntNullableFilter<"sub_foods"> | number | null
    deletedBy?: IntFilter<"sub_foods"> | number
    isDeleted?: BoolFilter<"sub_foods"> | boolean
    deletedAt?: DateTimeNullableFilter<"sub_foods"> | Date | string | null
    createdAt?: DateTimeFilter<"sub_foods"> | Date | string
    updatedAt?: DateTimeFilter<"sub_foods"> | Date | string
  }

  export type UsersCreateWithoutLike_resInput = {
    full_name?: string | null
    email?: string | null
    password?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: ordersCreateNestedManyWithoutUsersInput
    rate_res?: rate_resCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutLike_resInput = {
    id?: number
    full_name?: string | null
    email?: string | null
    password?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
    rate_res?: rate_resUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutLike_resInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutLike_resInput, UsersUncheckedCreateWithoutLike_resInput>
  }

  export type RestaurantsCreateWithoutLike_resInput = {
    res_name?: string | null
    Image?: string | null
    desc?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rate_res?: rate_resCreateNestedManyWithoutRestaurantsInput
  }

  export type RestaurantsUncheckedCreateWithoutLike_resInput = {
    id?: number
    res_name?: string | null
    Image?: string | null
    desc?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rate_res?: rate_resUncheckedCreateNestedManyWithoutRestaurantsInput
  }

  export type RestaurantsCreateOrConnectWithoutLike_resInput = {
    where: RestaurantsWhereUniqueInput
    create: XOR<RestaurantsCreateWithoutLike_resInput, RestaurantsUncheckedCreateWithoutLike_resInput>
  }

  export type UsersUpsertWithoutLike_resInput = {
    update: XOR<UsersUpdateWithoutLike_resInput, UsersUncheckedUpdateWithoutLike_resInput>
    create: XOR<UsersCreateWithoutLike_resInput, UsersUncheckedCreateWithoutLike_resInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutLike_resInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutLike_resInput, UsersUncheckedUpdateWithoutLike_resInput>
  }

  export type UsersUpdateWithoutLike_resInput = {
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUpdateManyWithoutUsersNestedInput
    rate_res?: rate_resUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutLike_resInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
    rate_res?: rate_resUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type RestaurantsUpsertWithoutLike_resInput = {
    update: XOR<RestaurantsUpdateWithoutLike_resInput, RestaurantsUncheckedUpdateWithoutLike_resInput>
    create: XOR<RestaurantsCreateWithoutLike_resInput, RestaurantsUncheckedCreateWithoutLike_resInput>
    where?: RestaurantsWhereInput
  }

  export type RestaurantsUpdateToOneWithWhereWithoutLike_resInput = {
    where?: RestaurantsWhereInput
    data: XOR<RestaurantsUpdateWithoutLike_resInput, RestaurantsUncheckedUpdateWithoutLike_resInput>
  }

  export type RestaurantsUpdateWithoutLike_resInput = {
    res_name?: NullableStringFieldUpdateOperationsInput | string | null
    Image?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rate_res?: rate_resUpdateManyWithoutRestaurantsNestedInput
  }

  export type RestaurantsUncheckedUpdateWithoutLike_resInput = {
    id?: IntFieldUpdateOperationsInput | number
    res_name?: NullableStringFieldUpdateOperationsInput | string | null
    Image?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rate_res?: rate_resUncheckedUpdateManyWithoutRestaurantsNestedInput
  }

  export type UsersCreateWithoutOrdersInput = {
    full_name?: string | null
    email?: string | null
    password?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    like_res?: like_resCreateNestedManyWithoutUsersInput
    rate_res?: rate_resCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutOrdersInput = {
    id?: number
    full_name?: string | null
    email?: string | null
    password?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    like_res?: like_resUncheckedCreateNestedManyWithoutUsersInput
    rate_res?: rate_resUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutOrdersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
  }

  export type foodsCreateWithoutOrdersInput = {
    food_name?: string | null
    image?: string | null
    price?: number | null
    desc?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    food_type?: food_typeCreateNestedOneWithoutFoodsInput
    sub_foods?: sub_foodsCreateNestedManyWithoutFoodsInput
  }

  export type foodsUncheckedCreateWithoutOrdersInput = {
    id?: number
    food_name?: string | null
    image?: string | null
    price?: number | null
    desc?: string | null
    type_id?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sub_foods?: sub_foodsUncheckedCreateNestedManyWithoutFoodsInput
  }

  export type foodsCreateOrConnectWithoutOrdersInput = {
    where: foodsWhereUniqueInput
    create: XOR<foodsCreateWithoutOrdersInput, foodsUncheckedCreateWithoutOrdersInput>
  }

  export type UsersUpsertWithoutOrdersInput = {
    update: XOR<UsersUpdateWithoutOrdersInput, UsersUncheckedUpdateWithoutOrdersInput>
    create: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutOrdersInput, UsersUncheckedUpdateWithoutOrdersInput>
  }

  export type UsersUpdateWithoutOrdersInput = {
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    like_res?: like_resUpdateManyWithoutUsersNestedInput
    rate_res?: rate_resUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    like_res?: like_resUncheckedUpdateManyWithoutUsersNestedInput
    rate_res?: rate_resUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type foodsUpsertWithoutOrdersInput = {
    update: XOR<foodsUpdateWithoutOrdersInput, foodsUncheckedUpdateWithoutOrdersInput>
    create: XOR<foodsCreateWithoutOrdersInput, foodsUncheckedCreateWithoutOrdersInput>
    where?: foodsWhereInput
  }

  export type foodsUpdateToOneWithWhereWithoutOrdersInput = {
    where?: foodsWhereInput
    data: XOR<foodsUpdateWithoutOrdersInput, foodsUncheckedUpdateWithoutOrdersInput>
  }

  export type foodsUpdateWithoutOrdersInput = {
    food_name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food_type?: food_typeUpdateOneWithoutFoodsNestedInput
    sub_foods?: sub_foodsUpdateManyWithoutFoodsNestedInput
  }

  export type foodsUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    food_name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_foods?: sub_foodsUncheckedUpdateManyWithoutFoodsNestedInput
  }

  export type UsersCreateWithoutRate_resInput = {
    full_name?: string | null
    email?: string | null
    password?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    like_res?: like_resCreateNestedManyWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutRate_resInput = {
    id?: number
    full_name?: string | null
    email?: string | null
    password?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    like_res?: like_resUncheckedCreateNestedManyWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutRate_resInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutRate_resInput, UsersUncheckedCreateWithoutRate_resInput>
  }

  export type RestaurantsCreateWithoutRate_resInput = {
    res_name?: string | null
    Image?: string | null
    desc?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    like_res?: like_resCreateNestedManyWithoutRestaurantsInput
  }

  export type RestaurantsUncheckedCreateWithoutRate_resInput = {
    id?: number
    res_name?: string | null
    Image?: string | null
    desc?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    like_res?: like_resUncheckedCreateNestedManyWithoutRestaurantsInput
  }

  export type RestaurantsCreateOrConnectWithoutRate_resInput = {
    where: RestaurantsWhereUniqueInput
    create: XOR<RestaurantsCreateWithoutRate_resInput, RestaurantsUncheckedCreateWithoutRate_resInput>
  }

  export type UsersUpsertWithoutRate_resInput = {
    update: XOR<UsersUpdateWithoutRate_resInput, UsersUncheckedUpdateWithoutRate_resInput>
    create: XOR<UsersCreateWithoutRate_resInput, UsersUncheckedCreateWithoutRate_resInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutRate_resInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutRate_resInput, UsersUncheckedUpdateWithoutRate_resInput>
  }

  export type UsersUpdateWithoutRate_resInput = {
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    like_res?: like_resUpdateManyWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutRate_resInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    like_res?: like_resUncheckedUpdateManyWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type RestaurantsUpsertWithoutRate_resInput = {
    update: XOR<RestaurantsUpdateWithoutRate_resInput, RestaurantsUncheckedUpdateWithoutRate_resInput>
    create: XOR<RestaurantsCreateWithoutRate_resInput, RestaurantsUncheckedCreateWithoutRate_resInput>
    where?: RestaurantsWhereInput
  }

  export type RestaurantsUpdateToOneWithWhereWithoutRate_resInput = {
    where?: RestaurantsWhereInput
    data: XOR<RestaurantsUpdateWithoutRate_resInput, RestaurantsUncheckedUpdateWithoutRate_resInput>
  }

  export type RestaurantsUpdateWithoutRate_resInput = {
    res_name?: NullableStringFieldUpdateOperationsInput | string | null
    Image?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    like_res?: like_resUpdateManyWithoutRestaurantsNestedInput
  }

  export type RestaurantsUncheckedUpdateWithoutRate_resInput = {
    id?: IntFieldUpdateOperationsInput | number
    res_name?: NullableStringFieldUpdateOperationsInput | string | null
    Image?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    like_res?: like_resUncheckedUpdateManyWithoutRestaurantsNestedInput
  }

  export type foodsCreateWithoutSub_foodsInput = {
    food_name?: string | null
    image?: string | null
    price?: number | null
    desc?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    food_type?: food_typeCreateNestedOneWithoutFoodsInput
    orders?: ordersCreateNestedManyWithoutFoodsInput
  }

  export type foodsUncheckedCreateWithoutSub_foodsInput = {
    id?: number
    food_name?: string | null
    image?: string | null
    price?: number | null
    desc?: string | null
    type_id?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: ordersUncheckedCreateNestedManyWithoutFoodsInput
  }

  export type foodsCreateOrConnectWithoutSub_foodsInput = {
    where: foodsWhereUniqueInput
    create: XOR<foodsCreateWithoutSub_foodsInput, foodsUncheckedCreateWithoutSub_foodsInput>
  }

  export type foodsUpsertWithoutSub_foodsInput = {
    update: XOR<foodsUpdateWithoutSub_foodsInput, foodsUncheckedUpdateWithoutSub_foodsInput>
    create: XOR<foodsCreateWithoutSub_foodsInput, foodsUncheckedCreateWithoutSub_foodsInput>
    where?: foodsWhereInput
  }

  export type foodsUpdateToOneWithWhereWithoutSub_foodsInput = {
    where?: foodsWhereInput
    data: XOR<foodsUpdateWithoutSub_foodsInput, foodsUncheckedUpdateWithoutSub_foodsInput>
  }

  export type foodsUpdateWithoutSub_foodsInput = {
    food_name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food_type?: food_typeUpdateOneWithoutFoodsNestedInput
    orders?: ordersUpdateManyWithoutFoodsNestedInput
  }

  export type foodsUncheckedUpdateWithoutSub_foodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    food_name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUncheckedUpdateManyWithoutFoodsNestedInput
  }

  export type like_resCreateManyRestaurantsInput = {
    id?: number
    user_id?: number | null
    date_like?: Date | string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type rate_resCreateManyRestaurantsInput = {
    id?: number
    user_id?: number | null
    amount?: number | null
    date_rate?: Date | string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type like_resUpdateWithoutRestaurantsInput = {
    date_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneWithoutLike_resNestedInput
  }

  export type like_resUncheckedUpdateWithoutRestaurantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    date_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type like_resUncheckedUpdateManyWithoutRestaurantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    date_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rate_resUpdateWithoutRestaurantsInput = {
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    date_rate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneWithoutRate_resNestedInput
  }

  export type rate_resUncheckedUpdateWithoutRestaurantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    date_rate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rate_resUncheckedUpdateManyWithoutRestaurantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    date_rate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type like_resCreateManyUsersInput = {
    id?: number
    res_id?: number | null
    date_like?: Date | string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ordersCreateManyUsersInput = {
    id?: number
    food_id?: number | null
    amount?: number | null
    code?: string | null
    arr_sub_id?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type rate_resCreateManyUsersInput = {
    id?: number
    res_id?: number | null
    amount?: number | null
    date_rate?: Date | string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type like_resUpdateWithoutUsersInput = {
    date_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Restaurants?: RestaurantsUpdateOneWithoutLike_resNestedInput
  }

  export type like_resUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    res_id?: NullableIntFieldUpdateOperationsInput | number | null
    date_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type like_resUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    res_id?: NullableIntFieldUpdateOperationsInput | number | null
    date_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersUpdateWithoutUsersInput = {
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    arr_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: foodsUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    food_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    arr_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    food_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    arr_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rate_resUpdateWithoutUsersInput = {
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    date_rate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Restaurants?: RestaurantsUpdateOneWithoutRate_resNestedInput
  }

  export type rate_resUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    res_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    date_rate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rate_resUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    res_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    date_rate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type foodsCreateManyFood_typeInput = {
    id?: number
    food_name?: string | null
    image?: string | null
    price?: number | null
    desc?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type foodsUpdateWithoutFood_typeInput = {
    food_name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUpdateManyWithoutFoodsNestedInput
    sub_foods?: sub_foodsUpdateManyWithoutFoodsNestedInput
  }

  export type foodsUncheckedUpdateWithoutFood_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    food_name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUncheckedUpdateManyWithoutFoodsNestedInput
    sub_foods?: sub_foodsUncheckedUpdateManyWithoutFoodsNestedInput
  }

  export type foodsUncheckedUpdateManyWithoutFood_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    food_name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersCreateManyFoodsInput = {
    id?: number
    user_id?: number | null
    amount?: number | null
    code?: string | null
    arr_sub_id?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type sub_foodsCreateManyFoodsInput = {
    id?: number
    sub_name?: string | null
    sub_price?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ordersUpdateWithoutFoodsInput = {
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    arr_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutFoodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    arr_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersUncheckedUpdateManyWithoutFoodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    arr_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sub_foodsUpdateWithoutFoodsInput = {
    sub_name?: NullableStringFieldUpdateOperationsInput | string | null
    sub_price?: NullableFloatFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sub_foodsUncheckedUpdateWithoutFoodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sub_name?: NullableStringFieldUpdateOperationsInput | string | null
    sub_price?: NullableFloatFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sub_foodsUncheckedUpdateManyWithoutFoodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sub_name?: NullableStringFieldUpdateOperationsInput | string | null
    sub_price?: NullableFloatFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}