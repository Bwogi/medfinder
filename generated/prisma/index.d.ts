
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Medication
 * 
 */
export type Medication = $Result.DefaultSelection<Prisma.$MedicationPayload>
/**
 * Model ProductVariant
 * 
 */
export type ProductVariant = $Result.DefaultSelection<Prisma.$ProductVariantPayload>
/**
 * Model StorageLocation
 * 
 */
export type StorageLocation = $Result.DefaultSelection<Prisma.$StorageLocationPayload>
/**
 * Model VariantPlacement
 * 
 */
export type VariantPlacement = $Result.DefaultSelection<Prisma.$VariantPlacementPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StorageLocationKind: {
  DRAWER: 'DRAWER',
  SHELF: 'SHELF',
  BIN: 'BIN',
  FRIDGE_BIN: 'FRIDGE_BIN',
  OTHER: 'OTHER'
};

export type StorageLocationKind = (typeof StorageLocationKind)[keyof typeof StorageLocationKind]


export const StorageArea: {
  FRONT_SHELVES: 'FRONT_SHELVES',
  BACK_SHELVES: 'BACK_SHELVES',
  FRIDGE: 'FRIDGE',
  FREEZER: 'FREEZER',
  NARCOTICS: 'NARCOTICS',
  OTC: 'OTC',
  WILL_CALL: 'WILL_CALL',
  AUTOMATION: 'AUTOMATION',
  COMPOUNDING: 'COMPOUNDING',
  OTHER: 'OTHER'
};

export type StorageArea = (typeof StorageArea)[keyof typeof StorageArea]


export const Route: {
  ORAL: 'ORAL',
  TOPICAL: 'TOPICAL',
  OPHTHALMIC: 'OPHTHALMIC',
  OTIC: 'OTIC',
  NASAL: 'NASAL',
  INHALATION: 'INHALATION',
  INJECTION: 'INJECTION',
  RECTAL: 'RECTAL',
  VAGINAL: 'VAGINAL',
  SUBLINGUAL: 'SUBLINGUAL',
  TRANSDERMAL: 'TRANSDERMAL',
  OTHER: 'OTHER'
};

export type Route = (typeof Route)[keyof typeof Route]


export const DosageForm: {
  TABLET: 'TABLET',
  TABLET_ER: 'TABLET_ER',
  TABLET_DR: 'TABLET_DR',
  CAPSULE: 'CAPSULE',
  CAPSULE_ER: 'CAPSULE_ER',
  ODT: 'ODT',
  ORAL_SOLUTION: 'ORAL_SOLUTION',
  ORAL_SUSPENSION: 'ORAL_SUSPENSION',
  SYRUP: 'SYRUP',
  POWDER: 'POWDER',
  GRANULES: 'GRANULES',
  CREAM: 'CREAM',
  OINTMENT: 'OINTMENT',
  GEL: 'GEL',
  LOTION: 'LOTION',
  PATCH: 'PATCH',
  EYE_DROPS: 'EYE_DROPS',
  EAR_DROPS: 'EAR_DROPS',
  NASAL_SPRAY: 'NASAL_SPRAY',
  INHALER: 'INHALER',
  NEB_SOLUTION: 'NEB_SOLUTION',
  INJECTION: 'INJECTION',
  SUPPOSITORY: 'SUPPOSITORY',
  OTHER: 'OTHER'
};

export type DosageForm = (typeof DosageForm)[keyof typeof DosageForm]

}

export type StorageLocationKind = $Enums.StorageLocationKind

export const StorageLocationKind: typeof $Enums.StorageLocationKind

export type StorageArea = $Enums.StorageArea

export const StorageArea: typeof $Enums.StorageArea

export type Route = $Enums.Route

export const Route: typeof $Enums.Route

export type DosageForm = $Enums.DosageForm

export const DosageForm: typeof $Enums.DosageForm

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Medications
 * const medications = await prisma.medication.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Medications
   * const medications = await prisma.medication.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.medication`: Exposes CRUD operations for the **Medication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medications
    * const medications = await prisma.medication.findMany()
    * ```
    */
  get medication(): Prisma.MedicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productVariant`: Exposes CRUD operations for the **ProductVariant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductVariants
    * const productVariants = await prisma.productVariant.findMany()
    * ```
    */
  get productVariant(): Prisma.ProductVariantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.storageLocation`: Exposes CRUD operations for the **StorageLocation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StorageLocations
    * const storageLocations = await prisma.storageLocation.findMany()
    * ```
    */
  get storageLocation(): Prisma.StorageLocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.variantPlacement`: Exposes CRUD operations for the **VariantPlacement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VariantPlacements
    * const variantPlacements = await prisma.variantPlacement.findMany()
    * ```
    */
  get variantPlacement(): Prisma.VariantPlacementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    Medication: 'Medication',
    ProductVariant: 'ProductVariant',
    StorageLocation: 'StorageLocation',
    VariantPlacement: 'VariantPlacement',
    Location: 'Location'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "medication" | "productVariant" | "storageLocation" | "variantPlacement" | "location"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Medication: {
        payload: Prisma.$MedicationPayload<ExtArgs>
        fields: Prisma.MedicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          findFirst: {
            args: Prisma.MedicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          findMany: {
            args: Prisma.MedicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          create: {
            args: Prisma.MedicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          createMany: {
            args: Prisma.MedicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          delete: {
            args: Prisma.MedicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          update: {
            args: Prisma.MedicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          deleteMany: {
            args: Prisma.MedicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          upsert: {
            args: Prisma.MedicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          aggregate: {
            args: Prisma.MedicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedication>
          }
          groupBy: {
            args: Prisma.MedicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicationCountArgs<ExtArgs>
            result: $Utils.Optional<MedicationCountAggregateOutputType> | number
          }
        }
      }
      ProductVariant: {
        payload: Prisma.$ProductVariantPayload<ExtArgs>
        fields: Prisma.ProductVariantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductVariantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductVariantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          findFirst: {
            args: Prisma.ProductVariantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductVariantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          findMany: {
            args: Prisma.ProductVariantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>[]
          }
          create: {
            args: Prisma.ProductVariantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          createMany: {
            args: Prisma.ProductVariantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductVariantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>[]
          }
          delete: {
            args: Prisma.ProductVariantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          update: {
            args: Prisma.ProductVariantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          deleteMany: {
            args: Prisma.ProductVariantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductVariantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductVariantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>[]
          }
          upsert: {
            args: Prisma.ProductVariantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          aggregate: {
            args: Prisma.ProductVariantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductVariant>
          }
          groupBy: {
            args: Prisma.ProductVariantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductVariantCountArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantCountAggregateOutputType> | number
          }
        }
      }
      StorageLocation: {
        payload: Prisma.$StorageLocationPayload<ExtArgs>
        fields: Prisma.StorageLocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StorageLocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageLocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StorageLocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageLocationPayload>
          }
          findFirst: {
            args: Prisma.StorageLocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageLocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StorageLocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageLocationPayload>
          }
          findMany: {
            args: Prisma.StorageLocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageLocationPayload>[]
          }
          create: {
            args: Prisma.StorageLocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageLocationPayload>
          }
          createMany: {
            args: Prisma.StorageLocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StorageLocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageLocationPayload>[]
          }
          delete: {
            args: Prisma.StorageLocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageLocationPayload>
          }
          update: {
            args: Prisma.StorageLocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageLocationPayload>
          }
          deleteMany: {
            args: Prisma.StorageLocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StorageLocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StorageLocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageLocationPayload>[]
          }
          upsert: {
            args: Prisma.StorageLocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageLocationPayload>
          }
          aggregate: {
            args: Prisma.StorageLocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStorageLocation>
          }
          groupBy: {
            args: Prisma.StorageLocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<StorageLocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.StorageLocationCountArgs<ExtArgs>
            result: $Utils.Optional<StorageLocationCountAggregateOutputType> | number
          }
        }
      }
      VariantPlacement: {
        payload: Prisma.$VariantPlacementPayload<ExtArgs>
        fields: Prisma.VariantPlacementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VariantPlacementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPlacementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VariantPlacementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPlacementPayload>
          }
          findFirst: {
            args: Prisma.VariantPlacementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPlacementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VariantPlacementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPlacementPayload>
          }
          findMany: {
            args: Prisma.VariantPlacementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPlacementPayload>[]
          }
          create: {
            args: Prisma.VariantPlacementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPlacementPayload>
          }
          createMany: {
            args: Prisma.VariantPlacementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VariantPlacementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPlacementPayload>[]
          }
          delete: {
            args: Prisma.VariantPlacementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPlacementPayload>
          }
          update: {
            args: Prisma.VariantPlacementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPlacementPayload>
          }
          deleteMany: {
            args: Prisma.VariantPlacementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VariantPlacementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VariantPlacementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPlacementPayload>[]
          }
          upsert: {
            args: Prisma.VariantPlacementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPlacementPayload>
          }
          aggregate: {
            args: Prisma.VariantPlacementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVariantPlacement>
          }
          groupBy: {
            args: Prisma.VariantPlacementGroupByArgs<ExtArgs>
            result: $Utils.Optional<VariantPlacementGroupByOutputType>[]
          }
          count: {
            args: Prisma.VariantPlacementCountArgs<ExtArgs>
            result: $Utils.Optional<VariantPlacementCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    medication?: MedicationOmit
    productVariant?: ProductVariantOmit
    storageLocation?: StorageLocationOmit
    variantPlacement?: VariantPlacementOmit
    location?: LocationOmit
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
   * Count Type MedicationCountOutputType
   */

  export type MedicationCountOutputType = {
    variants: number
  }

  export type MedicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | MedicationCountOutputTypeCountVariantsArgs
  }

  // Custom InputTypes
  /**
   * MedicationCountOutputType without action
   */
  export type MedicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationCountOutputType
     */
    select?: MedicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicationCountOutputType without action
   */
  export type MedicationCountOutputTypeCountVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantWhereInput
  }


  /**
   * Count Type ProductVariantCountOutputType
   */

  export type ProductVariantCountOutputType = {
    locations: number
    placements: number
  }

  export type ProductVariantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locations?: boolean | ProductVariantCountOutputTypeCountLocationsArgs
    placements?: boolean | ProductVariantCountOutputTypeCountPlacementsArgs
  }

  // Custom InputTypes
  /**
   * ProductVariantCountOutputType without action
   */
  export type ProductVariantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantCountOutputType
     */
    select?: ProductVariantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductVariantCountOutputType without action
   */
  export type ProductVariantCountOutputTypeCountLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
  }

  /**
   * ProductVariantCountOutputType without action
   */
  export type ProductVariantCountOutputTypeCountPlacementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantPlacementWhereInput
  }


  /**
   * Count Type StorageLocationCountOutputType
   */

  export type StorageLocationCountOutputType = {
    placements: number
  }

  export type StorageLocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    placements?: boolean | StorageLocationCountOutputTypeCountPlacementsArgs
  }

  // Custom InputTypes
  /**
   * StorageLocationCountOutputType without action
   */
  export type StorageLocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageLocationCountOutputType
     */
    select?: StorageLocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StorageLocationCountOutputType without action
   */
  export type StorageLocationCountOutputTypeCountPlacementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantPlacementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Medication
   */

  export type AggregateMedication = {
    _count: MedicationCountAggregateOutputType | null
    _min: MedicationMinAggregateOutputType | null
    _max: MedicationMaxAggregateOutputType | null
  }

  export type MedicationMinAggregateOutputType = {
    id: string | null
    genericName: string | null
    brandNames: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicationMaxAggregateOutputType = {
    id: string | null
    genericName: string | null
    brandNames: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicationCountAggregateOutputType = {
    id: number
    genericName: number
    brandNames: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MedicationMinAggregateInputType = {
    id?: true
    genericName?: true
    brandNames?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicationMaxAggregateInputType = {
    id?: true
    genericName?: true
    brandNames?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicationCountAggregateInputType = {
    id?: true
    genericName?: true
    brandNames?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MedicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medication to aggregate.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medications
    **/
    _count?: true | MedicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicationMaxAggregateInputType
  }

  export type GetMedicationAggregateType<T extends MedicationAggregateArgs> = {
        [P in keyof T & keyof AggregateMedication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedication[P]>
      : GetScalarType<T[P], AggregateMedication[P]>
  }




  export type MedicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationWhereInput
    orderBy?: MedicationOrderByWithAggregationInput | MedicationOrderByWithAggregationInput[]
    by: MedicationScalarFieldEnum[] | MedicationScalarFieldEnum
    having?: MedicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicationCountAggregateInputType | true
    _min?: MedicationMinAggregateInputType
    _max?: MedicationMaxAggregateInputType
  }

  export type MedicationGroupByOutputType = {
    id: string
    genericName: string
    brandNames: string
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: MedicationCountAggregateOutputType | null
    _min: MedicationMinAggregateOutputType | null
    _max: MedicationMaxAggregateOutputType | null
  }

  type GetMedicationGroupByPayload<T extends MedicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicationGroupByOutputType[P]>
            : GetScalarType<T[P], MedicationGroupByOutputType[P]>
        }
      >
    >


  export type MedicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    genericName?: boolean
    brandNames?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    variants?: boolean | Medication$variantsArgs<ExtArgs>
    _count?: boolean | MedicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medication"]>

  export type MedicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    genericName?: boolean
    brandNames?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["medication"]>

  export type MedicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    genericName?: boolean
    brandNames?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["medication"]>

  export type MedicationSelectScalar = {
    id?: boolean
    genericName?: boolean
    brandNames?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MedicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "genericName" | "brandNames" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["medication"]>
  export type MedicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | Medication$variantsArgs<ExtArgs>
    _count?: boolean | MedicationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MedicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MedicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medication"
    objects: {
      variants: Prisma.$ProductVariantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      genericName: string
      brandNames: string
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["medication"]>
    composites: {}
  }

  type MedicationGetPayload<S extends boolean | null | undefined | MedicationDefaultArgs> = $Result.GetResult<Prisma.$MedicationPayload, S>

  type MedicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicationCountAggregateInputType | true
    }

  export interface MedicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medication'], meta: { name: 'Medication' } }
    /**
     * Find zero or one Medication that matches the filter.
     * @param {MedicationFindUniqueArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicationFindUniqueArgs>(args: SelectSubset<T, MedicationFindUniqueArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicationFindUniqueOrThrowArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicationFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindFirstArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicationFindFirstArgs>(args?: SelectSubset<T, MedicationFindFirstArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindFirstOrThrowArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicationFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medications
     * const medications = await prisma.medication.findMany()
     * 
     * // Get first 10 Medications
     * const medications = await prisma.medication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicationWithIdOnly = await prisma.medication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicationFindManyArgs>(args?: SelectSubset<T, MedicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medication.
     * @param {MedicationCreateArgs} args - Arguments to create a Medication.
     * @example
     * // Create one Medication
     * const Medication = await prisma.medication.create({
     *   data: {
     *     // ... data to create a Medication
     *   }
     * })
     * 
     */
    create<T extends MedicationCreateArgs>(args: SelectSubset<T, MedicationCreateArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medications.
     * @param {MedicationCreateManyArgs} args - Arguments to create many Medications.
     * @example
     * // Create many Medications
     * const medication = await prisma.medication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicationCreateManyArgs>(args?: SelectSubset<T, MedicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medications and returns the data saved in the database.
     * @param {MedicationCreateManyAndReturnArgs} args - Arguments to create many Medications.
     * @example
     * // Create many Medications
     * const medication = await prisma.medication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medications and only return the `id`
     * const medicationWithIdOnly = await prisma.medication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicationCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medication.
     * @param {MedicationDeleteArgs} args - Arguments to delete one Medication.
     * @example
     * // Delete one Medication
     * const Medication = await prisma.medication.delete({
     *   where: {
     *     // ... filter to delete one Medication
     *   }
     * })
     * 
     */
    delete<T extends MedicationDeleteArgs>(args: SelectSubset<T, MedicationDeleteArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medication.
     * @param {MedicationUpdateArgs} args - Arguments to update one Medication.
     * @example
     * // Update one Medication
     * const medication = await prisma.medication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicationUpdateArgs>(args: SelectSubset<T, MedicationUpdateArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medications.
     * @param {MedicationDeleteManyArgs} args - Arguments to filter Medications to delete.
     * @example
     * // Delete a few Medications
     * const { count } = await prisma.medication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicationDeleteManyArgs>(args?: SelectSubset<T, MedicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medications
     * const medication = await prisma.medication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicationUpdateManyArgs>(args: SelectSubset<T, MedicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medications and returns the data updated in the database.
     * @param {MedicationUpdateManyAndReturnArgs} args - Arguments to update many Medications.
     * @example
     * // Update many Medications
     * const medication = await prisma.medication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medications and only return the `id`
     * const medicationWithIdOnly = await prisma.medication.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MedicationUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medication.
     * @param {MedicationUpsertArgs} args - Arguments to update or create a Medication.
     * @example
     * // Update or create a Medication
     * const medication = await prisma.medication.upsert({
     *   create: {
     *     // ... data to create a Medication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medication we want to update
     *   }
     * })
     */
    upsert<T extends MedicationUpsertArgs>(args: SelectSubset<T, MedicationUpsertArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationCountArgs} args - Arguments to filter Medications to count.
     * @example
     * // Count the number of Medications
     * const count = await prisma.medication.count({
     *   where: {
     *     // ... the filter for the Medications we want to count
     *   }
     * })
    **/
    count<T extends MedicationCountArgs>(
      args?: Subset<T, MedicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicationAggregateArgs>(args: Subset<T, MedicationAggregateArgs>): Prisma.PrismaPromise<GetMedicationAggregateType<T>>

    /**
     * Group by Medication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationGroupByArgs} args - Group by arguments.
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
      T extends MedicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicationGroupByArgs['orderBy'] }
        : { orderBy?: MedicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medication model
   */
  readonly fields: MedicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    variants<T extends Medication$variantsArgs<ExtArgs> = {}>(args?: Subset<T, Medication$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Medication model
   */
  interface MedicationFieldRefs {
    readonly id: FieldRef<"Medication", 'String'>
    readonly genericName: FieldRef<"Medication", 'String'>
    readonly brandNames: FieldRef<"Medication", 'String'>
    readonly notes: FieldRef<"Medication", 'String'>
    readonly createdAt: FieldRef<"Medication", 'DateTime'>
    readonly updatedAt: FieldRef<"Medication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Medication findUnique
   */
  export type MedicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication findUniqueOrThrow
   */
  export type MedicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication findFirst
   */
  export type MedicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medications.
     */
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication findFirstOrThrow
   */
  export type MedicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medications.
     */
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication findMany
   */
  export type MedicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medications to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication create
   */
  export type MedicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Medication.
     */
    data: XOR<MedicationCreateInput, MedicationUncheckedCreateInput>
  }

  /**
   * Medication createMany
   */
  export type MedicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medications.
     */
    data: MedicationCreateManyInput | MedicationCreateManyInput[]
  }

  /**
   * Medication createManyAndReturn
   */
  export type MedicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * The data used to create many Medications.
     */
    data: MedicationCreateManyInput | MedicationCreateManyInput[]
  }

  /**
   * Medication update
   */
  export type MedicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Medication.
     */
    data: XOR<MedicationUpdateInput, MedicationUncheckedUpdateInput>
    /**
     * Choose, which Medication to update.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication updateMany
   */
  export type MedicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medications.
     */
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyInput>
    /**
     * Filter which Medications to update
     */
    where?: MedicationWhereInput
    /**
     * Limit how many Medications to update.
     */
    limit?: number
  }

  /**
   * Medication updateManyAndReturn
   */
  export type MedicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * The data used to update Medications.
     */
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyInput>
    /**
     * Filter which Medications to update
     */
    where?: MedicationWhereInput
    /**
     * Limit how many Medications to update.
     */
    limit?: number
  }

  /**
   * Medication upsert
   */
  export type MedicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Medication to update in case it exists.
     */
    where: MedicationWhereUniqueInput
    /**
     * In case the Medication found by the `where` argument doesn't exist, create a new Medication with this data.
     */
    create: XOR<MedicationCreateInput, MedicationUncheckedCreateInput>
    /**
     * In case the Medication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicationUpdateInput, MedicationUncheckedUpdateInput>
  }

  /**
   * Medication delete
   */
  export type MedicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter which Medication to delete.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication deleteMany
   */
  export type MedicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medications to delete
     */
    where?: MedicationWhereInput
    /**
     * Limit how many Medications to delete.
     */
    limit?: number
  }

  /**
   * Medication.variants
   */
  export type Medication$variantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    where?: ProductVariantWhereInput
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    cursor?: ProductVariantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * Medication without action
   */
  export type MedicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
  }


  /**
   * Model ProductVariant
   */

  export type AggregateProductVariant = {
    _count: ProductVariantCountAggregateOutputType | null
    _min: ProductVariantMinAggregateOutputType | null
    _max: ProductVariantMaxAggregateOutputType | null
  }

  export type ProductVariantMinAggregateOutputType = {
    id: string | null
    medicationId: string | null
    strength: string | null
    route: $Enums.Route | null
    dosageForm: $Enums.DosageForm | null
    ndc: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductVariantMaxAggregateOutputType = {
    id: string | null
    medicationId: string | null
    strength: string | null
    route: $Enums.Route | null
    dosageForm: $Enums.DosageForm | null
    ndc: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductVariantCountAggregateOutputType = {
    id: number
    medicationId: number
    strength: number
    route: number
    dosageForm: number
    ndc: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductVariantMinAggregateInputType = {
    id?: true
    medicationId?: true
    strength?: true
    route?: true
    dosageForm?: true
    ndc?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductVariantMaxAggregateInputType = {
    id?: true
    medicationId?: true
    strength?: true
    route?: true
    dosageForm?: true
    ndc?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductVariantCountAggregateInputType = {
    id?: true
    medicationId?: true
    strength?: true
    route?: true
    dosageForm?: true
    ndc?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductVariantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariant to aggregate.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductVariants
    **/
    _count?: true | ProductVariantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductVariantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductVariantMaxAggregateInputType
  }

  export type GetProductVariantAggregateType<T extends ProductVariantAggregateArgs> = {
        [P in keyof T & keyof AggregateProductVariant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductVariant[P]>
      : GetScalarType<T[P], AggregateProductVariant[P]>
  }




  export type ProductVariantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantWhereInput
    orderBy?: ProductVariantOrderByWithAggregationInput | ProductVariantOrderByWithAggregationInput[]
    by: ProductVariantScalarFieldEnum[] | ProductVariantScalarFieldEnum
    having?: ProductVariantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductVariantCountAggregateInputType | true
    _min?: ProductVariantMinAggregateInputType
    _max?: ProductVariantMaxAggregateInputType
  }

  export type ProductVariantGroupByOutputType = {
    id: string
    medicationId: string
    strength: string | null
    route: $Enums.Route
    dosageForm: $Enums.DosageForm
    ndc: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProductVariantCountAggregateOutputType | null
    _min: ProductVariantMinAggregateOutputType | null
    _max: ProductVariantMaxAggregateOutputType | null
  }

  type GetProductVariantGroupByPayload<T extends ProductVariantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductVariantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductVariantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductVariantGroupByOutputType[P]>
            : GetScalarType<T[P], ProductVariantGroupByOutputType[P]>
        }
      >
    >


  export type ProductVariantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicationId?: boolean
    strength?: boolean
    route?: boolean
    dosageForm?: boolean
    ndc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
    locations?: boolean | ProductVariant$locationsArgs<ExtArgs>
    placements?: boolean | ProductVariant$placementsArgs<ExtArgs>
    _count?: boolean | ProductVariantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariant"]>

  export type ProductVariantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicationId?: boolean
    strength?: boolean
    route?: boolean
    dosageForm?: boolean
    ndc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariant"]>

  export type ProductVariantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicationId?: boolean
    strength?: boolean
    route?: boolean
    dosageForm?: boolean
    ndc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariant"]>

  export type ProductVariantSelectScalar = {
    id?: boolean
    medicationId?: boolean
    strength?: boolean
    route?: boolean
    dosageForm?: boolean
    ndc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductVariantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "medicationId" | "strength" | "route" | "dosageForm" | "ndc" | "createdAt" | "updatedAt", ExtArgs["result"]["productVariant"]>
  export type ProductVariantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
    locations?: boolean | ProductVariant$locationsArgs<ExtArgs>
    placements?: boolean | ProductVariant$placementsArgs<ExtArgs>
    _count?: boolean | ProductVariantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductVariantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }
  export type ProductVariantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }

  export type $ProductVariantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductVariant"
    objects: {
      medication: Prisma.$MedicationPayload<ExtArgs>
      locations: Prisma.$LocationPayload<ExtArgs>[]
      placements: Prisma.$VariantPlacementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      medicationId: string
      strength: string | null
      route: $Enums.Route
      dosageForm: $Enums.DosageForm
      ndc: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productVariant"]>
    composites: {}
  }

  type ProductVariantGetPayload<S extends boolean | null | undefined | ProductVariantDefaultArgs> = $Result.GetResult<Prisma.$ProductVariantPayload, S>

  type ProductVariantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductVariantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductVariantCountAggregateInputType | true
    }

  export interface ProductVariantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductVariant'], meta: { name: 'ProductVariant' } }
    /**
     * Find zero or one ProductVariant that matches the filter.
     * @param {ProductVariantFindUniqueArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductVariantFindUniqueArgs>(args: SelectSubset<T, ProductVariantFindUniqueArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductVariant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductVariantFindUniqueOrThrowArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductVariantFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductVariantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductVariant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindFirstArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductVariantFindFirstArgs>(args?: SelectSubset<T, ProductVariantFindFirstArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductVariant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindFirstOrThrowArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductVariantFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductVariantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductVariants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductVariants
     * const productVariants = await prisma.productVariant.findMany()
     * 
     * // Get first 10 ProductVariants
     * const productVariants = await prisma.productVariant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productVariantWithIdOnly = await prisma.productVariant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductVariantFindManyArgs>(args?: SelectSubset<T, ProductVariantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductVariant.
     * @param {ProductVariantCreateArgs} args - Arguments to create a ProductVariant.
     * @example
     * // Create one ProductVariant
     * const ProductVariant = await prisma.productVariant.create({
     *   data: {
     *     // ... data to create a ProductVariant
     *   }
     * })
     * 
     */
    create<T extends ProductVariantCreateArgs>(args: SelectSubset<T, ProductVariantCreateArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductVariants.
     * @param {ProductVariantCreateManyArgs} args - Arguments to create many ProductVariants.
     * @example
     * // Create many ProductVariants
     * const productVariant = await prisma.productVariant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductVariantCreateManyArgs>(args?: SelectSubset<T, ProductVariantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductVariants and returns the data saved in the database.
     * @param {ProductVariantCreateManyAndReturnArgs} args - Arguments to create many ProductVariants.
     * @example
     * // Create many ProductVariants
     * const productVariant = await prisma.productVariant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductVariants and only return the `id`
     * const productVariantWithIdOnly = await prisma.productVariant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductVariantCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductVariantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductVariant.
     * @param {ProductVariantDeleteArgs} args - Arguments to delete one ProductVariant.
     * @example
     * // Delete one ProductVariant
     * const ProductVariant = await prisma.productVariant.delete({
     *   where: {
     *     // ... filter to delete one ProductVariant
     *   }
     * })
     * 
     */
    delete<T extends ProductVariantDeleteArgs>(args: SelectSubset<T, ProductVariantDeleteArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductVariant.
     * @param {ProductVariantUpdateArgs} args - Arguments to update one ProductVariant.
     * @example
     * // Update one ProductVariant
     * const productVariant = await prisma.productVariant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductVariantUpdateArgs>(args: SelectSubset<T, ProductVariantUpdateArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductVariants.
     * @param {ProductVariantDeleteManyArgs} args - Arguments to filter ProductVariants to delete.
     * @example
     * // Delete a few ProductVariants
     * const { count } = await prisma.productVariant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductVariantDeleteManyArgs>(args?: SelectSubset<T, ProductVariantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductVariants
     * const productVariant = await prisma.productVariant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductVariantUpdateManyArgs>(args: SelectSubset<T, ProductVariantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVariants and returns the data updated in the database.
     * @param {ProductVariantUpdateManyAndReturnArgs} args - Arguments to update many ProductVariants.
     * @example
     * // Update many ProductVariants
     * const productVariant = await prisma.productVariant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductVariants and only return the `id`
     * const productVariantWithIdOnly = await prisma.productVariant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductVariantUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductVariantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductVariant.
     * @param {ProductVariantUpsertArgs} args - Arguments to update or create a ProductVariant.
     * @example
     * // Update or create a ProductVariant
     * const productVariant = await prisma.productVariant.upsert({
     *   create: {
     *     // ... data to create a ProductVariant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductVariant we want to update
     *   }
     * })
     */
    upsert<T extends ProductVariantUpsertArgs>(args: SelectSubset<T, ProductVariantUpsertArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantCountArgs} args - Arguments to filter ProductVariants to count.
     * @example
     * // Count the number of ProductVariants
     * const count = await prisma.productVariant.count({
     *   where: {
     *     // ... the filter for the ProductVariants we want to count
     *   }
     * })
    **/
    count<T extends ProductVariantCountArgs>(
      args?: Subset<T, ProductVariantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductVariantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductVariantAggregateArgs>(args: Subset<T, ProductVariantAggregateArgs>): Prisma.PrismaPromise<GetProductVariantAggregateType<T>>

    /**
     * Group by ProductVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantGroupByArgs} args - Group by arguments.
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
      T extends ProductVariantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductVariantGroupByArgs['orderBy'] }
        : { orderBy?: ProductVariantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductVariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductVariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductVariant model
   */
  readonly fields: ProductVariantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductVariant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductVariantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medication<T extends MedicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicationDefaultArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    locations<T extends ProductVariant$locationsArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariant$locationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    placements<T extends ProductVariant$placementsArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariant$placementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantPlacementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProductVariant model
   */
  interface ProductVariantFieldRefs {
    readonly id: FieldRef<"ProductVariant", 'String'>
    readonly medicationId: FieldRef<"ProductVariant", 'String'>
    readonly strength: FieldRef<"ProductVariant", 'String'>
    readonly route: FieldRef<"ProductVariant", 'Route'>
    readonly dosageForm: FieldRef<"ProductVariant", 'DosageForm'>
    readonly ndc: FieldRef<"ProductVariant", 'String'>
    readonly createdAt: FieldRef<"ProductVariant", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductVariant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductVariant findUnique
   */
  export type ProductVariantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant findUniqueOrThrow
   */
  export type ProductVariantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant findFirst
   */
  export type ProductVariantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariants.
     */
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant findFirstOrThrow
   */
  export type ProductVariantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariants.
     */
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant findMany
   */
  export type ProductVariantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariants to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant create
   */
  export type ProductVariantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductVariant.
     */
    data: XOR<ProductVariantCreateInput, ProductVariantUncheckedCreateInput>
  }

  /**
   * ProductVariant createMany
   */
  export type ProductVariantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductVariants.
     */
    data: ProductVariantCreateManyInput | ProductVariantCreateManyInput[]
  }

  /**
   * ProductVariant createManyAndReturn
   */
  export type ProductVariantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * The data used to create many ProductVariants.
     */
    data: ProductVariantCreateManyInput | ProductVariantCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductVariant update
   */
  export type ProductVariantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductVariant.
     */
    data: XOR<ProductVariantUpdateInput, ProductVariantUncheckedUpdateInput>
    /**
     * Choose, which ProductVariant to update.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant updateMany
   */
  export type ProductVariantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductVariants.
     */
    data: XOR<ProductVariantUpdateManyMutationInput, ProductVariantUncheckedUpdateManyInput>
    /**
     * Filter which ProductVariants to update
     */
    where?: ProductVariantWhereInput
    /**
     * Limit how many ProductVariants to update.
     */
    limit?: number
  }

  /**
   * ProductVariant updateManyAndReturn
   */
  export type ProductVariantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * The data used to update ProductVariants.
     */
    data: XOR<ProductVariantUpdateManyMutationInput, ProductVariantUncheckedUpdateManyInput>
    /**
     * Filter which ProductVariants to update
     */
    where?: ProductVariantWhereInput
    /**
     * Limit how many ProductVariants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductVariant upsert
   */
  export type ProductVariantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductVariant to update in case it exists.
     */
    where: ProductVariantWhereUniqueInput
    /**
     * In case the ProductVariant found by the `where` argument doesn't exist, create a new ProductVariant with this data.
     */
    create: XOR<ProductVariantCreateInput, ProductVariantUncheckedCreateInput>
    /**
     * In case the ProductVariant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductVariantUpdateInput, ProductVariantUncheckedUpdateInput>
  }

  /**
   * ProductVariant delete
   */
  export type ProductVariantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter which ProductVariant to delete.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant deleteMany
   */
  export type ProductVariantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariants to delete
     */
    where?: ProductVariantWhereInput
    /**
     * Limit how many ProductVariants to delete.
     */
    limit?: number
  }

  /**
   * ProductVariant.locations
   */
  export type ProductVariant$locationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    cursor?: LocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * ProductVariant.placements
   */
  export type ProductVariant$placementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantPlacement
     */
    select?: VariantPlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantPlacement
     */
    omit?: VariantPlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantPlacementInclude<ExtArgs> | null
    where?: VariantPlacementWhereInput
    orderBy?: VariantPlacementOrderByWithRelationInput | VariantPlacementOrderByWithRelationInput[]
    cursor?: VariantPlacementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariantPlacementScalarFieldEnum | VariantPlacementScalarFieldEnum[]
  }

  /**
   * ProductVariant without action
   */
  export type ProductVariantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
  }


  /**
   * Model StorageLocation
   */

  export type AggregateStorageLocation = {
    _count: StorageLocationCountAggregateOutputType | null
    _min: StorageLocationMinAggregateOutputType | null
    _max: StorageLocationMaxAggregateOutputType | null
  }

  export type StorageLocationMinAggregateOutputType = {
    id: string | null
    kind: $Enums.StorageLocationKind | null
    area: $Enums.StorageArea | null
    label: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StorageLocationMaxAggregateOutputType = {
    id: string | null
    kind: $Enums.StorageLocationKind | null
    area: $Enums.StorageArea | null
    label: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StorageLocationCountAggregateOutputType = {
    id: number
    kind: number
    area: number
    label: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StorageLocationMinAggregateInputType = {
    id?: true
    kind?: true
    area?: true
    label?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StorageLocationMaxAggregateInputType = {
    id?: true
    kind?: true
    area?: true
    label?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StorageLocationCountAggregateInputType = {
    id?: true
    kind?: true
    area?: true
    label?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StorageLocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StorageLocation to aggregate.
     */
    where?: StorageLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorageLocations to fetch.
     */
    orderBy?: StorageLocationOrderByWithRelationInput | StorageLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StorageLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorageLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorageLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StorageLocations
    **/
    _count?: true | StorageLocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StorageLocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StorageLocationMaxAggregateInputType
  }

  export type GetStorageLocationAggregateType<T extends StorageLocationAggregateArgs> = {
        [P in keyof T & keyof AggregateStorageLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStorageLocation[P]>
      : GetScalarType<T[P], AggregateStorageLocation[P]>
  }




  export type StorageLocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StorageLocationWhereInput
    orderBy?: StorageLocationOrderByWithAggregationInput | StorageLocationOrderByWithAggregationInput[]
    by: StorageLocationScalarFieldEnum[] | StorageLocationScalarFieldEnum
    having?: StorageLocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StorageLocationCountAggregateInputType | true
    _min?: StorageLocationMinAggregateInputType
    _max?: StorageLocationMaxAggregateInputType
  }

  export type StorageLocationGroupByOutputType = {
    id: string
    kind: $Enums.StorageLocationKind
    area: $Enums.StorageArea
    label: string
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: StorageLocationCountAggregateOutputType | null
    _min: StorageLocationMinAggregateOutputType | null
    _max: StorageLocationMaxAggregateOutputType | null
  }

  type GetStorageLocationGroupByPayload<T extends StorageLocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StorageLocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StorageLocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StorageLocationGroupByOutputType[P]>
            : GetScalarType<T[P], StorageLocationGroupByOutputType[P]>
        }
      >
    >


  export type StorageLocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kind?: boolean
    area?: boolean
    label?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    placements?: boolean | StorageLocation$placementsArgs<ExtArgs>
    _count?: boolean | StorageLocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storageLocation"]>

  export type StorageLocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kind?: boolean
    area?: boolean
    label?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["storageLocation"]>

  export type StorageLocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kind?: boolean
    area?: boolean
    label?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["storageLocation"]>

  export type StorageLocationSelectScalar = {
    id?: boolean
    kind?: boolean
    area?: boolean
    label?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StorageLocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kind" | "area" | "label" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["storageLocation"]>
  export type StorageLocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    placements?: boolean | StorageLocation$placementsArgs<ExtArgs>
    _count?: boolean | StorageLocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StorageLocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StorageLocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StorageLocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StorageLocation"
    objects: {
      placements: Prisma.$VariantPlacementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      kind: $Enums.StorageLocationKind
      area: $Enums.StorageArea
      label: string
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["storageLocation"]>
    composites: {}
  }

  type StorageLocationGetPayload<S extends boolean | null | undefined | StorageLocationDefaultArgs> = $Result.GetResult<Prisma.$StorageLocationPayload, S>

  type StorageLocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StorageLocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StorageLocationCountAggregateInputType | true
    }

  export interface StorageLocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StorageLocation'], meta: { name: 'StorageLocation' } }
    /**
     * Find zero or one StorageLocation that matches the filter.
     * @param {StorageLocationFindUniqueArgs} args - Arguments to find a StorageLocation
     * @example
     * // Get one StorageLocation
     * const storageLocation = await prisma.storageLocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StorageLocationFindUniqueArgs>(args: SelectSubset<T, StorageLocationFindUniqueArgs<ExtArgs>>): Prisma__StorageLocationClient<$Result.GetResult<Prisma.$StorageLocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StorageLocation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StorageLocationFindUniqueOrThrowArgs} args - Arguments to find a StorageLocation
     * @example
     * // Get one StorageLocation
     * const storageLocation = await prisma.storageLocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StorageLocationFindUniqueOrThrowArgs>(args: SelectSubset<T, StorageLocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StorageLocationClient<$Result.GetResult<Prisma.$StorageLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StorageLocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageLocationFindFirstArgs} args - Arguments to find a StorageLocation
     * @example
     * // Get one StorageLocation
     * const storageLocation = await prisma.storageLocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StorageLocationFindFirstArgs>(args?: SelectSubset<T, StorageLocationFindFirstArgs<ExtArgs>>): Prisma__StorageLocationClient<$Result.GetResult<Prisma.$StorageLocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StorageLocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageLocationFindFirstOrThrowArgs} args - Arguments to find a StorageLocation
     * @example
     * // Get one StorageLocation
     * const storageLocation = await prisma.storageLocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StorageLocationFindFirstOrThrowArgs>(args?: SelectSubset<T, StorageLocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__StorageLocationClient<$Result.GetResult<Prisma.$StorageLocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StorageLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageLocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StorageLocations
     * const storageLocations = await prisma.storageLocation.findMany()
     * 
     * // Get first 10 StorageLocations
     * const storageLocations = await prisma.storageLocation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storageLocationWithIdOnly = await prisma.storageLocation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StorageLocationFindManyArgs>(args?: SelectSubset<T, StorageLocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorageLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StorageLocation.
     * @param {StorageLocationCreateArgs} args - Arguments to create a StorageLocation.
     * @example
     * // Create one StorageLocation
     * const StorageLocation = await prisma.storageLocation.create({
     *   data: {
     *     // ... data to create a StorageLocation
     *   }
     * })
     * 
     */
    create<T extends StorageLocationCreateArgs>(args: SelectSubset<T, StorageLocationCreateArgs<ExtArgs>>): Prisma__StorageLocationClient<$Result.GetResult<Prisma.$StorageLocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StorageLocations.
     * @param {StorageLocationCreateManyArgs} args - Arguments to create many StorageLocations.
     * @example
     * // Create many StorageLocations
     * const storageLocation = await prisma.storageLocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StorageLocationCreateManyArgs>(args?: SelectSubset<T, StorageLocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StorageLocations and returns the data saved in the database.
     * @param {StorageLocationCreateManyAndReturnArgs} args - Arguments to create many StorageLocations.
     * @example
     * // Create many StorageLocations
     * const storageLocation = await prisma.storageLocation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StorageLocations and only return the `id`
     * const storageLocationWithIdOnly = await prisma.storageLocation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StorageLocationCreateManyAndReturnArgs>(args?: SelectSubset<T, StorageLocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorageLocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StorageLocation.
     * @param {StorageLocationDeleteArgs} args - Arguments to delete one StorageLocation.
     * @example
     * // Delete one StorageLocation
     * const StorageLocation = await prisma.storageLocation.delete({
     *   where: {
     *     // ... filter to delete one StorageLocation
     *   }
     * })
     * 
     */
    delete<T extends StorageLocationDeleteArgs>(args: SelectSubset<T, StorageLocationDeleteArgs<ExtArgs>>): Prisma__StorageLocationClient<$Result.GetResult<Prisma.$StorageLocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StorageLocation.
     * @param {StorageLocationUpdateArgs} args - Arguments to update one StorageLocation.
     * @example
     * // Update one StorageLocation
     * const storageLocation = await prisma.storageLocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StorageLocationUpdateArgs>(args: SelectSubset<T, StorageLocationUpdateArgs<ExtArgs>>): Prisma__StorageLocationClient<$Result.GetResult<Prisma.$StorageLocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StorageLocations.
     * @param {StorageLocationDeleteManyArgs} args - Arguments to filter StorageLocations to delete.
     * @example
     * // Delete a few StorageLocations
     * const { count } = await prisma.storageLocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StorageLocationDeleteManyArgs>(args?: SelectSubset<T, StorageLocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StorageLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageLocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StorageLocations
     * const storageLocation = await prisma.storageLocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StorageLocationUpdateManyArgs>(args: SelectSubset<T, StorageLocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StorageLocations and returns the data updated in the database.
     * @param {StorageLocationUpdateManyAndReturnArgs} args - Arguments to update many StorageLocations.
     * @example
     * // Update many StorageLocations
     * const storageLocation = await prisma.storageLocation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StorageLocations and only return the `id`
     * const storageLocationWithIdOnly = await prisma.storageLocation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StorageLocationUpdateManyAndReturnArgs>(args: SelectSubset<T, StorageLocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorageLocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StorageLocation.
     * @param {StorageLocationUpsertArgs} args - Arguments to update or create a StorageLocation.
     * @example
     * // Update or create a StorageLocation
     * const storageLocation = await prisma.storageLocation.upsert({
     *   create: {
     *     // ... data to create a StorageLocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StorageLocation we want to update
     *   }
     * })
     */
    upsert<T extends StorageLocationUpsertArgs>(args: SelectSubset<T, StorageLocationUpsertArgs<ExtArgs>>): Prisma__StorageLocationClient<$Result.GetResult<Prisma.$StorageLocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StorageLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageLocationCountArgs} args - Arguments to filter StorageLocations to count.
     * @example
     * // Count the number of StorageLocations
     * const count = await prisma.storageLocation.count({
     *   where: {
     *     // ... the filter for the StorageLocations we want to count
     *   }
     * })
    **/
    count<T extends StorageLocationCountArgs>(
      args?: Subset<T, StorageLocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StorageLocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StorageLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageLocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StorageLocationAggregateArgs>(args: Subset<T, StorageLocationAggregateArgs>): Prisma.PrismaPromise<GetStorageLocationAggregateType<T>>

    /**
     * Group by StorageLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageLocationGroupByArgs} args - Group by arguments.
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
      T extends StorageLocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StorageLocationGroupByArgs['orderBy'] }
        : { orderBy?: StorageLocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StorageLocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStorageLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StorageLocation model
   */
  readonly fields: StorageLocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StorageLocation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StorageLocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    placements<T extends StorageLocation$placementsArgs<ExtArgs> = {}>(args?: Subset<T, StorageLocation$placementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantPlacementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the StorageLocation model
   */
  interface StorageLocationFieldRefs {
    readonly id: FieldRef<"StorageLocation", 'String'>
    readonly kind: FieldRef<"StorageLocation", 'StorageLocationKind'>
    readonly area: FieldRef<"StorageLocation", 'StorageArea'>
    readonly label: FieldRef<"StorageLocation", 'String'>
    readonly notes: FieldRef<"StorageLocation", 'String'>
    readonly createdAt: FieldRef<"StorageLocation", 'DateTime'>
    readonly updatedAt: FieldRef<"StorageLocation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StorageLocation findUnique
   */
  export type StorageLocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageLocation
     */
    select?: StorageLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageLocation
     */
    omit?: StorageLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageLocationInclude<ExtArgs> | null
    /**
     * Filter, which StorageLocation to fetch.
     */
    where: StorageLocationWhereUniqueInput
  }

  /**
   * StorageLocation findUniqueOrThrow
   */
  export type StorageLocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageLocation
     */
    select?: StorageLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageLocation
     */
    omit?: StorageLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageLocationInclude<ExtArgs> | null
    /**
     * Filter, which StorageLocation to fetch.
     */
    where: StorageLocationWhereUniqueInput
  }

  /**
   * StorageLocation findFirst
   */
  export type StorageLocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageLocation
     */
    select?: StorageLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageLocation
     */
    omit?: StorageLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageLocationInclude<ExtArgs> | null
    /**
     * Filter, which StorageLocation to fetch.
     */
    where?: StorageLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorageLocations to fetch.
     */
    orderBy?: StorageLocationOrderByWithRelationInput | StorageLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StorageLocations.
     */
    cursor?: StorageLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorageLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorageLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StorageLocations.
     */
    distinct?: StorageLocationScalarFieldEnum | StorageLocationScalarFieldEnum[]
  }

  /**
   * StorageLocation findFirstOrThrow
   */
  export type StorageLocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageLocation
     */
    select?: StorageLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageLocation
     */
    omit?: StorageLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageLocationInclude<ExtArgs> | null
    /**
     * Filter, which StorageLocation to fetch.
     */
    where?: StorageLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorageLocations to fetch.
     */
    orderBy?: StorageLocationOrderByWithRelationInput | StorageLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StorageLocations.
     */
    cursor?: StorageLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorageLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorageLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StorageLocations.
     */
    distinct?: StorageLocationScalarFieldEnum | StorageLocationScalarFieldEnum[]
  }

  /**
   * StorageLocation findMany
   */
  export type StorageLocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageLocation
     */
    select?: StorageLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageLocation
     */
    omit?: StorageLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageLocationInclude<ExtArgs> | null
    /**
     * Filter, which StorageLocations to fetch.
     */
    where?: StorageLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorageLocations to fetch.
     */
    orderBy?: StorageLocationOrderByWithRelationInput | StorageLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StorageLocations.
     */
    cursor?: StorageLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorageLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorageLocations.
     */
    skip?: number
    distinct?: StorageLocationScalarFieldEnum | StorageLocationScalarFieldEnum[]
  }

  /**
   * StorageLocation create
   */
  export type StorageLocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageLocation
     */
    select?: StorageLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageLocation
     */
    omit?: StorageLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageLocationInclude<ExtArgs> | null
    /**
     * The data needed to create a StorageLocation.
     */
    data: XOR<StorageLocationCreateInput, StorageLocationUncheckedCreateInput>
  }

  /**
   * StorageLocation createMany
   */
  export type StorageLocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StorageLocations.
     */
    data: StorageLocationCreateManyInput | StorageLocationCreateManyInput[]
  }

  /**
   * StorageLocation createManyAndReturn
   */
  export type StorageLocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageLocation
     */
    select?: StorageLocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StorageLocation
     */
    omit?: StorageLocationOmit<ExtArgs> | null
    /**
     * The data used to create many StorageLocations.
     */
    data: StorageLocationCreateManyInput | StorageLocationCreateManyInput[]
  }

  /**
   * StorageLocation update
   */
  export type StorageLocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageLocation
     */
    select?: StorageLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageLocation
     */
    omit?: StorageLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageLocationInclude<ExtArgs> | null
    /**
     * The data needed to update a StorageLocation.
     */
    data: XOR<StorageLocationUpdateInput, StorageLocationUncheckedUpdateInput>
    /**
     * Choose, which StorageLocation to update.
     */
    where: StorageLocationWhereUniqueInput
  }

  /**
   * StorageLocation updateMany
   */
  export type StorageLocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StorageLocations.
     */
    data: XOR<StorageLocationUpdateManyMutationInput, StorageLocationUncheckedUpdateManyInput>
    /**
     * Filter which StorageLocations to update
     */
    where?: StorageLocationWhereInput
    /**
     * Limit how many StorageLocations to update.
     */
    limit?: number
  }

  /**
   * StorageLocation updateManyAndReturn
   */
  export type StorageLocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageLocation
     */
    select?: StorageLocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StorageLocation
     */
    omit?: StorageLocationOmit<ExtArgs> | null
    /**
     * The data used to update StorageLocations.
     */
    data: XOR<StorageLocationUpdateManyMutationInput, StorageLocationUncheckedUpdateManyInput>
    /**
     * Filter which StorageLocations to update
     */
    where?: StorageLocationWhereInput
    /**
     * Limit how many StorageLocations to update.
     */
    limit?: number
  }

  /**
   * StorageLocation upsert
   */
  export type StorageLocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageLocation
     */
    select?: StorageLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageLocation
     */
    omit?: StorageLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageLocationInclude<ExtArgs> | null
    /**
     * The filter to search for the StorageLocation to update in case it exists.
     */
    where: StorageLocationWhereUniqueInput
    /**
     * In case the StorageLocation found by the `where` argument doesn't exist, create a new StorageLocation with this data.
     */
    create: XOR<StorageLocationCreateInput, StorageLocationUncheckedCreateInput>
    /**
     * In case the StorageLocation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StorageLocationUpdateInput, StorageLocationUncheckedUpdateInput>
  }

  /**
   * StorageLocation delete
   */
  export type StorageLocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageLocation
     */
    select?: StorageLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageLocation
     */
    omit?: StorageLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageLocationInclude<ExtArgs> | null
    /**
     * Filter which StorageLocation to delete.
     */
    where: StorageLocationWhereUniqueInput
  }

  /**
   * StorageLocation deleteMany
   */
  export type StorageLocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StorageLocations to delete
     */
    where?: StorageLocationWhereInput
    /**
     * Limit how many StorageLocations to delete.
     */
    limit?: number
  }

  /**
   * StorageLocation.placements
   */
  export type StorageLocation$placementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantPlacement
     */
    select?: VariantPlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantPlacement
     */
    omit?: VariantPlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantPlacementInclude<ExtArgs> | null
    where?: VariantPlacementWhereInput
    orderBy?: VariantPlacementOrderByWithRelationInput | VariantPlacementOrderByWithRelationInput[]
    cursor?: VariantPlacementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariantPlacementScalarFieldEnum | VariantPlacementScalarFieldEnum[]
  }

  /**
   * StorageLocation without action
   */
  export type StorageLocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageLocation
     */
    select?: StorageLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageLocation
     */
    omit?: StorageLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageLocationInclude<ExtArgs> | null
  }


  /**
   * Model VariantPlacement
   */

  export type AggregateVariantPlacement = {
    _count: VariantPlacementCountAggregateOutputType | null
    _min: VariantPlacementMinAggregateOutputType | null
    _max: VariantPlacementMaxAggregateOutputType | null
  }

  export type VariantPlacementMinAggregateOutputType = {
    id: string | null
    productVariantId: string | null
    storageLocationId: string | null
    isPrimary: boolean | null
    cassetteNumber: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VariantPlacementMaxAggregateOutputType = {
    id: string | null
    productVariantId: string | null
    storageLocationId: string | null
    isPrimary: boolean | null
    cassetteNumber: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VariantPlacementCountAggregateOutputType = {
    id: number
    productVariantId: number
    storageLocationId: number
    isPrimary: number
    cassetteNumber: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VariantPlacementMinAggregateInputType = {
    id?: true
    productVariantId?: true
    storageLocationId?: true
    isPrimary?: true
    cassetteNumber?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VariantPlacementMaxAggregateInputType = {
    id?: true
    productVariantId?: true
    storageLocationId?: true
    isPrimary?: true
    cassetteNumber?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VariantPlacementCountAggregateInputType = {
    id?: true
    productVariantId?: true
    storageLocationId?: true
    isPrimary?: true
    cassetteNumber?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VariantPlacementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VariantPlacement to aggregate.
     */
    where?: VariantPlacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariantPlacements to fetch.
     */
    orderBy?: VariantPlacementOrderByWithRelationInput | VariantPlacementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VariantPlacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariantPlacements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariantPlacements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VariantPlacements
    **/
    _count?: true | VariantPlacementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VariantPlacementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VariantPlacementMaxAggregateInputType
  }

  export type GetVariantPlacementAggregateType<T extends VariantPlacementAggregateArgs> = {
        [P in keyof T & keyof AggregateVariantPlacement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariantPlacement[P]>
      : GetScalarType<T[P], AggregateVariantPlacement[P]>
  }




  export type VariantPlacementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantPlacementWhereInput
    orderBy?: VariantPlacementOrderByWithAggregationInput | VariantPlacementOrderByWithAggregationInput[]
    by: VariantPlacementScalarFieldEnum[] | VariantPlacementScalarFieldEnum
    having?: VariantPlacementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VariantPlacementCountAggregateInputType | true
    _min?: VariantPlacementMinAggregateInputType
    _max?: VariantPlacementMaxAggregateInputType
  }

  export type VariantPlacementGroupByOutputType = {
    id: string
    productVariantId: string
    storageLocationId: string
    isPrimary: boolean
    cassetteNumber: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: VariantPlacementCountAggregateOutputType | null
    _min: VariantPlacementMinAggregateOutputType | null
    _max: VariantPlacementMaxAggregateOutputType | null
  }

  type GetVariantPlacementGroupByPayload<T extends VariantPlacementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VariantPlacementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VariantPlacementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VariantPlacementGroupByOutputType[P]>
            : GetScalarType<T[P], VariantPlacementGroupByOutputType[P]>
        }
      >
    >


  export type VariantPlacementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productVariantId?: boolean
    storageLocationId?: boolean
    isPrimary?: boolean
    cassetteNumber?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productVariant?: boolean | ProductVariantDefaultArgs<ExtArgs>
    storageLocation?: boolean | StorageLocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variantPlacement"]>

  export type VariantPlacementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productVariantId?: boolean
    storageLocationId?: boolean
    isPrimary?: boolean
    cassetteNumber?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productVariant?: boolean | ProductVariantDefaultArgs<ExtArgs>
    storageLocation?: boolean | StorageLocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variantPlacement"]>

  export type VariantPlacementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productVariantId?: boolean
    storageLocationId?: boolean
    isPrimary?: boolean
    cassetteNumber?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productVariant?: boolean | ProductVariantDefaultArgs<ExtArgs>
    storageLocation?: boolean | StorageLocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variantPlacement"]>

  export type VariantPlacementSelectScalar = {
    id?: boolean
    productVariantId?: boolean
    storageLocationId?: boolean
    isPrimary?: boolean
    cassetteNumber?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VariantPlacementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productVariantId" | "storageLocationId" | "isPrimary" | "cassetteNumber" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["variantPlacement"]>
  export type VariantPlacementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productVariant?: boolean | ProductVariantDefaultArgs<ExtArgs>
    storageLocation?: boolean | StorageLocationDefaultArgs<ExtArgs>
  }
  export type VariantPlacementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productVariant?: boolean | ProductVariantDefaultArgs<ExtArgs>
    storageLocation?: boolean | StorageLocationDefaultArgs<ExtArgs>
  }
  export type VariantPlacementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productVariant?: boolean | ProductVariantDefaultArgs<ExtArgs>
    storageLocation?: boolean | StorageLocationDefaultArgs<ExtArgs>
  }

  export type $VariantPlacementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VariantPlacement"
    objects: {
      productVariant: Prisma.$ProductVariantPayload<ExtArgs>
      storageLocation: Prisma.$StorageLocationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productVariantId: string
      storageLocationId: string
      isPrimary: boolean
      cassetteNumber: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["variantPlacement"]>
    composites: {}
  }

  type VariantPlacementGetPayload<S extends boolean | null | undefined | VariantPlacementDefaultArgs> = $Result.GetResult<Prisma.$VariantPlacementPayload, S>

  type VariantPlacementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VariantPlacementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VariantPlacementCountAggregateInputType | true
    }

  export interface VariantPlacementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VariantPlacement'], meta: { name: 'VariantPlacement' } }
    /**
     * Find zero or one VariantPlacement that matches the filter.
     * @param {VariantPlacementFindUniqueArgs} args - Arguments to find a VariantPlacement
     * @example
     * // Get one VariantPlacement
     * const variantPlacement = await prisma.variantPlacement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VariantPlacementFindUniqueArgs>(args: SelectSubset<T, VariantPlacementFindUniqueArgs<ExtArgs>>): Prisma__VariantPlacementClient<$Result.GetResult<Prisma.$VariantPlacementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VariantPlacement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VariantPlacementFindUniqueOrThrowArgs} args - Arguments to find a VariantPlacement
     * @example
     * // Get one VariantPlacement
     * const variantPlacement = await prisma.variantPlacement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VariantPlacementFindUniqueOrThrowArgs>(args: SelectSubset<T, VariantPlacementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VariantPlacementClient<$Result.GetResult<Prisma.$VariantPlacementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VariantPlacement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantPlacementFindFirstArgs} args - Arguments to find a VariantPlacement
     * @example
     * // Get one VariantPlacement
     * const variantPlacement = await prisma.variantPlacement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VariantPlacementFindFirstArgs>(args?: SelectSubset<T, VariantPlacementFindFirstArgs<ExtArgs>>): Prisma__VariantPlacementClient<$Result.GetResult<Prisma.$VariantPlacementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VariantPlacement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantPlacementFindFirstOrThrowArgs} args - Arguments to find a VariantPlacement
     * @example
     * // Get one VariantPlacement
     * const variantPlacement = await prisma.variantPlacement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VariantPlacementFindFirstOrThrowArgs>(args?: SelectSubset<T, VariantPlacementFindFirstOrThrowArgs<ExtArgs>>): Prisma__VariantPlacementClient<$Result.GetResult<Prisma.$VariantPlacementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VariantPlacements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantPlacementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VariantPlacements
     * const variantPlacements = await prisma.variantPlacement.findMany()
     * 
     * // Get first 10 VariantPlacements
     * const variantPlacements = await prisma.variantPlacement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const variantPlacementWithIdOnly = await prisma.variantPlacement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VariantPlacementFindManyArgs>(args?: SelectSubset<T, VariantPlacementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantPlacementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VariantPlacement.
     * @param {VariantPlacementCreateArgs} args - Arguments to create a VariantPlacement.
     * @example
     * // Create one VariantPlacement
     * const VariantPlacement = await prisma.variantPlacement.create({
     *   data: {
     *     // ... data to create a VariantPlacement
     *   }
     * })
     * 
     */
    create<T extends VariantPlacementCreateArgs>(args: SelectSubset<T, VariantPlacementCreateArgs<ExtArgs>>): Prisma__VariantPlacementClient<$Result.GetResult<Prisma.$VariantPlacementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VariantPlacements.
     * @param {VariantPlacementCreateManyArgs} args - Arguments to create many VariantPlacements.
     * @example
     * // Create many VariantPlacements
     * const variantPlacement = await prisma.variantPlacement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VariantPlacementCreateManyArgs>(args?: SelectSubset<T, VariantPlacementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VariantPlacements and returns the data saved in the database.
     * @param {VariantPlacementCreateManyAndReturnArgs} args - Arguments to create many VariantPlacements.
     * @example
     * // Create many VariantPlacements
     * const variantPlacement = await prisma.variantPlacement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VariantPlacements and only return the `id`
     * const variantPlacementWithIdOnly = await prisma.variantPlacement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VariantPlacementCreateManyAndReturnArgs>(args?: SelectSubset<T, VariantPlacementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantPlacementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VariantPlacement.
     * @param {VariantPlacementDeleteArgs} args - Arguments to delete one VariantPlacement.
     * @example
     * // Delete one VariantPlacement
     * const VariantPlacement = await prisma.variantPlacement.delete({
     *   where: {
     *     // ... filter to delete one VariantPlacement
     *   }
     * })
     * 
     */
    delete<T extends VariantPlacementDeleteArgs>(args: SelectSubset<T, VariantPlacementDeleteArgs<ExtArgs>>): Prisma__VariantPlacementClient<$Result.GetResult<Prisma.$VariantPlacementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VariantPlacement.
     * @param {VariantPlacementUpdateArgs} args - Arguments to update one VariantPlacement.
     * @example
     * // Update one VariantPlacement
     * const variantPlacement = await prisma.variantPlacement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VariantPlacementUpdateArgs>(args: SelectSubset<T, VariantPlacementUpdateArgs<ExtArgs>>): Prisma__VariantPlacementClient<$Result.GetResult<Prisma.$VariantPlacementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VariantPlacements.
     * @param {VariantPlacementDeleteManyArgs} args - Arguments to filter VariantPlacements to delete.
     * @example
     * // Delete a few VariantPlacements
     * const { count } = await prisma.variantPlacement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VariantPlacementDeleteManyArgs>(args?: SelectSubset<T, VariantPlacementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VariantPlacements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantPlacementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VariantPlacements
     * const variantPlacement = await prisma.variantPlacement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VariantPlacementUpdateManyArgs>(args: SelectSubset<T, VariantPlacementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VariantPlacements and returns the data updated in the database.
     * @param {VariantPlacementUpdateManyAndReturnArgs} args - Arguments to update many VariantPlacements.
     * @example
     * // Update many VariantPlacements
     * const variantPlacement = await prisma.variantPlacement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VariantPlacements and only return the `id`
     * const variantPlacementWithIdOnly = await prisma.variantPlacement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VariantPlacementUpdateManyAndReturnArgs>(args: SelectSubset<T, VariantPlacementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantPlacementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VariantPlacement.
     * @param {VariantPlacementUpsertArgs} args - Arguments to update or create a VariantPlacement.
     * @example
     * // Update or create a VariantPlacement
     * const variantPlacement = await prisma.variantPlacement.upsert({
     *   create: {
     *     // ... data to create a VariantPlacement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VariantPlacement we want to update
     *   }
     * })
     */
    upsert<T extends VariantPlacementUpsertArgs>(args: SelectSubset<T, VariantPlacementUpsertArgs<ExtArgs>>): Prisma__VariantPlacementClient<$Result.GetResult<Prisma.$VariantPlacementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VariantPlacements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantPlacementCountArgs} args - Arguments to filter VariantPlacements to count.
     * @example
     * // Count the number of VariantPlacements
     * const count = await prisma.variantPlacement.count({
     *   where: {
     *     // ... the filter for the VariantPlacements we want to count
     *   }
     * })
    **/
    count<T extends VariantPlacementCountArgs>(
      args?: Subset<T, VariantPlacementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VariantPlacementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VariantPlacement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantPlacementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VariantPlacementAggregateArgs>(args: Subset<T, VariantPlacementAggregateArgs>): Prisma.PrismaPromise<GetVariantPlacementAggregateType<T>>

    /**
     * Group by VariantPlacement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantPlacementGroupByArgs} args - Group by arguments.
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
      T extends VariantPlacementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VariantPlacementGroupByArgs['orderBy'] }
        : { orderBy?: VariantPlacementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VariantPlacementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariantPlacementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VariantPlacement model
   */
  readonly fields: VariantPlacementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VariantPlacement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VariantPlacementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productVariant<T extends ProductVariantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariantDefaultArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    storageLocation<T extends StorageLocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StorageLocationDefaultArgs<ExtArgs>>): Prisma__StorageLocationClient<$Result.GetResult<Prisma.$StorageLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VariantPlacement model
   */
  interface VariantPlacementFieldRefs {
    readonly id: FieldRef<"VariantPlacement", 'String'>
    readonly productVariantId: FieldRef<"VariantPlacement", 'String'>
    readonly storageLocationId: FieldRef<"VariantPlacement", 'String'>
    readonly isPrimary: FieldRef<"VariantPlacement", 'Boolean'>
    readonly cassetteNumber: FieldRef<"VariantPlacement", 'String'>
    readonly notes: FieldRef<"VariantPlacement", 'String'>
    readonly createdAt: FieldRef<"VariantPlacement", 'DateTime'>
    readonly updatedAt: FieldRef<"VariantPlacement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VariantPlacement findUnique
   */
  export type VariantPlacementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantPlacement
     */
    select?: VariantPlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantPlacement
     */
    omit?: VariantPlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantPlacementInclude<ExtArgs> | null
    /**
     * Filter, which VariantPlacement to fetch.
     */
    where: VariantPlacementWhereUniqueInput
  }

  /**
   * VariantPlacement findUniqueOrThrow
   */
  export type VariantPlacementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantPlacement
     */
    select?: VariantPlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantPlacement
     */
    omit?: VariantPlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantPlacementInclude<ExtArgs> | null
    /**
     * Filter, which VariantPlacement to fetch.
     */
    where: VariantPlacementWhereUniqueInput
  }

  /**
   * VariantPlacement findFirst
   */
  export type VariantPlacementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantPlacement
     */
    select?: VariantPlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantPlacement
     */
    omit?: VariantPlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantPlacementInclude<ExtArgs> | null
    /**
     * Filter, which VariantPlacement to fetch.
     */
    where?: VariantPlacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariantPlacements to fetch.
     */
    orderBy?: VariantPlacementOrderByWithRelationInput | VariantPlacementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VariantPlacements.
     */
    cursor?: VariantPlacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariantPlacements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariantPlacements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VariantPlacements.
     */
    distinct?: VariantPlacementScalarFieldEnum | VariantPlacementScalarFieldEnum[]
  }

  /**
   * VariantPlacement findFirstOrThrow
   */
  export type VariantPlacementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantPlacement
     */
    select?: VariantPlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantPlacement
     */
    omit?: VariantPlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantPlacementInclude<ExtArgs> | null
    /**
     * Filter, which VariantPlacement to fetch.
     */
    where?: VariantPlacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariantPlacements to fetch.
     */
    orderBy?: VariantPlacementOrderByWithRelationInput | VariantPlacementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VariantPlacements.
     */
    cursor?: VariantPlacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariantPlacements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariantPlacements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VariantPlacements.
     */
    distinct?: VariantPlacementScalarFieldEnum | VariantPlacementScalarFieldEnum[]
  }

  /**
   * VariantPlacement findMany
   */
  export type VariantPlacementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantPlacement
     */
    select?: VariantPlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantPlacement
     */
    omit?: VariantPlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantPlacementInclude<ExtArgs> | null
    /**
     * Filter, which VariantPlacements to fetch.
     */
    where?: VariantPlacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariantPlacements to fetch.
     */
    orderBy?: VariantPlacementOrderByWithRelationInput | VariantPlacementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VariantPlacements.
     */
    cursor?: VariantPlacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariantPlacements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariantPlacements.
     */
    skip?: number
    distinct?: VariantPlacementScalarFieldEnum | VariantPlacementScalarFieldEnum[]
  }

  /**
   * VariantPlacement create
   */
  export type VariantPlacementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantPlacement
     */
    select?: VariantPlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantPlacement
     */
    omit?: VariantPlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantPlacementInclude<ExtArgs> | null
    /**
     * The data needed to create a VariantPlacement.
     */
    data: XOR<VariantPlacementCreateInput, VariantPlacementUncheckedCreateInput>
  }

  /**
   * VariantPlacement createMany
   */
  export type VariantPlacementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VariantPlacements.
     */
    data: VariantPlacementCreateManyInput | VariantPlacementCreateManyInput[]
  }

  /**
   * VariantPlacement createManyAndReturn
   */
  export type VariantPlacementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantPlacement
     */
    select?: VariantPlacementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VariantPlacement
     */
    omit?: VariantPlacementOmit<ExtArgs> | null
    /**
     * The data used to create many VariantPlacements.
     */
    data: VariantPlacementCreateManyInput | VariantPlacementCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantPlacementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VariantPlacement update
   */
  export type VariantPlacementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantPlacement
     */
    select?: VariantPlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantPlacement
     */
    omit?: VariantPlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantPlacementInclude<ExtArgs> | null
    /**
     * The data needed to update a VariantPlacement.
     */
    data: XOR<VariantPlacementUpdateInput, VariantPlacementUncheckedUpdateInput>
    /**
     * Choose, which VariantPlacement to update.
     */
    where: VariantPlacementWhereUniqueInput
  }

  /**
   * VariantPlacement updateMany
   */
  export type VariantPlacementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VariantPlacements.
     */
    data: XOR<VariantPlacementUpdateManyMutationInput, VariantPlacementUncheckedUpdateManyInput>
    /**
     * Filter which VariantPlacements to update
     */
    where?: VariantPlacementWhereInput
    /**
     * Limit how many VariantPlacements to update.
     */
    limit?: number
  }

  /**
   * VariantPlacement updateManyAndReturn
   */
  export type VariantPlacementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantPlacement
     */
    select?: VariantPlacementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VariantPlacement
     */
    omit?: VariantPlacementOmit<ExtArgs> | null
    /**
     * The data used to update VariantPlacements.
     */
    data: XOR<VariantPlacementUpdateManyMutationInput, VariantPlacementUncheckedUpdateManyInput>
    /**
     * Filter which VariantPlacements to update
     */
    where?: VariantPlacementWhereInput
    /**
     * Limit how many VariantPlacements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantPlacementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VariantPlacement upsert
   */
  export type VariantPlacementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantPlacement
     */
    select?: VariantPlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantPlacement
     */
    omit?: VariantPlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantPlacementInclude<ExtArgs> | null
    /**
     * The filter to search for the VariantPlacement to update in case it exists.
     */
    where: VariantPlacementWhereUniqueInput
    /**
     * In case the VariantPlacement found by the `where` argument doesn't exist, create a new VariantPlacement with this data.
     */
    create: XOR<VariantPlacementCreateInput, VariantPlacementUncheckedCreateInput>
    /**
     * In case the VariantPlacement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VariantPlacementUpdateInput, VariantPlacementUncheckedUpdateInput>
  }

  /**
   * VariantPlacement delete
   */
  export type VariantPlacementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantPlacement
     */
    select?: VariantPlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantPlacement
     */
    omit?: VariantPlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantPlacementInclude<ExtArgs> | null
    /**
     * Filter which VariantPlacement to delete.
     */
    where: VariantPlacementWhereUniqueInput
  }

  /**
   * VariantPlacement deleteMany
   */
  export type VariantPlacementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VariantPlacements to delete
     */
    where?: VariantPlacementWhereInput
    /**
     * Limit how many VariantPlacements to delete.
     */
    limit?: number
  }

  /**
   * VariantPlacement without action
   */
  export type VariantPlacementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantPlacement
     */
    select?: VariantPlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantPlacement
     */
    omit?: VariantPlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantPlacementInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationMinAggregateOutputType = {
    id: string | null
    productVariantId: string | null
    area: $Enums.StorageArea | null
    label: string | null
    cassetteNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationMaxAggregateOutputType = {
    id: string | null
    productVariantId: string | null
    area: $Enums.StorageArea | null
    label: string | null
    cassetteNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    productVariantId: number
    area: number
    label: number
    cassetteNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LocationMinAggregateInputType = {
    id?: true
    productVariantId?: true
    area?: true
    label?: true
    cassetteNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    productVariantId?: true
    area?: true
    label?: true
    cassetteNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    productVariantId?: true
    area?: true
    label?: true
    cassetteNumber?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: string
    productVariantId: string
    area: $Enums.StorageArea
    label: string
    cassetteNumber: string | null
    createdAt: Date
    updatedAt: Date
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productVariantId?: boolean
    area?: boolean
    label?: boolean
    cassetteNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productVariant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productVariantId?: boolean
    area?: boolean
    label?: boolean
    cassetteNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productVariant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productVariantId?: boolean
    area?: boolean
    label?: boolean
    cassetteNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productVariant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    productVariantId?: boolean
    area?: boolean
    label?: boolean
    cassetteNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productVariantId" | "area" | "label" | "cassetteNumber" | "createdAt" | "updatedAt", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productVariant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }
  export type LocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productVariant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productVariant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      productVariant: Prisma.$ProductVariantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productVariantId: string
      area: $Enums.StorageArea
      label: string
      cassetteNumber: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
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
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productVariant<T extends ProductVariantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariantDefaultArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'String'>
    readonly productVariantId: FieldRef<"Location", 'String'>
    readonly area: FieldRef<"Location", 'StorageArea'>
    readonly label: FieldRef<"Location", 'String'>
    readonly cassetteNumber: FieldRef<"Location", 'String'>
    readonly createdAt: FieldRef<"Location", 'DateTime'>
    readonly updatedAt: FieldRef<"Location", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
  }

  /**
   * Location createManyAndReturn
   */
  export type LocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MedicationScalarFieldEnum: {
    id: 'id',
    genericName: 'genericName',
    brandNames: 'brandNames',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MedicationScalarFieldEnum = (typeof MedicationScalarFieldEnum)[keyof typeof MedicationScalarFieldEnum]


  export const ProductVariantScalarFieldEnum: {
    id: 'id',
    medicationId: 'medicationId',
    strength: 'strength',
    route: 'route',
    dosageForm: 'dosageForm',
    ndc: 'ndc',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductVariantScalarFieldEnum = (typeof ProductVariantScalarFieldEnum)[keyof typeof ProductVariantScalarFieldEnum]


  export const StorageLocationScalarFieldEnum: {
    id: 'id',
    kind: 'kind',
    area: 'area',
    label: 'label',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StorageLocationScalarFieldEnum = (typeof StorageLocationScalarFieldEnum)[keyof typeof StorageLocationScalarFieldEnum]


  export const VariantPlacementScalarFieldEnum: {
    id: 'id',
    productVariantId: 'productVariantId',
    storageLocationId: 'storageLocationId',
    isPrimary: 'isPrimary',
    cassetteNumber: 'cassetteNumber',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VariantPlacementScalarFieldEnum = (typeof VariantPlacementScalarFieldEnum)[keyof typeof VariantPlacementScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    productVariantId: 'productVariantId',
    area: 'area',
    label: 'label',
    cassetteNumber: 'cassetteNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Route'
   */
  export type EnumRouteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Route'>
    


  /**
   * Reference to a field of type 'DosageForm'
   */
  export type EnumDosageFormFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DosageForm'>
    


  /**
   * Reference to a field of type 'StorageLocationKind'
   */
  export type EnumStorageLocationKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StorageLocationKind'>
    


  /**
   * Reference to a field of type 'StorageArea'
   */
  export type EnumStorageAreaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StorageArea'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type MedicationWhereInput = {
    AND?: MedicationWhereInput | MedicationWhereInput[]
    OR?: MedicationWhereInput[]
    NOT?: MedicationWhereInput | MedicationWhereInput[]
    id?: StringFilter<"Medication"> | string
    genericName?: StringFilter<"Medication"> | string
    brandNames?: StringFilter<"Medication"> | string
    notes?: StringNullableFilter<"Medication"> | string | null
    createdAt?: DateTimeFilter<"Medication"> | Date | string
    updatedAt?: DateTimeFilter<"Medication"> | Date | string
    variants?: ProductVariantListRelationFilter
  }

  export type MedicationOrderByWithRelationInput = {
    id?: SortOrder
    genericName?: SortOrder
    brandNames?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    variants?: ProductVariantOrderByRelationAggregateInput
  }

  export type MedicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicationWhereInput | MedicationWhereInput[]
    OR?: MedicationWhereInput[]
    NOT?: MedicationWhereInput | MedicationWhereInput[]
    genericName?: StringFilter<"Medication"> | string
    brandNames?: StringFilter<"Medication"> | string
    notes?: StringNullableFilter<"Medication"> | string | null
    createdAt?: DateTimeFilter<"Medication"> | Date | string
    updatedAt?: DateTimeFilter<"Medication"> | Date | string
    variants?: ProductVariantListRelationFilter
  }, "id">

  export type MedicationOrderByWithAggregationInput = {
    id?: SortOrder
    genericName?: SortOrder
    brandNames?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MedicationCountOrderByAggregateInput
    _max?: MedicationMaxOrderByAggregateInput
    _min?: MedicationMinOrderByAggregateInput
  }

  export type MedicationScalarWhereWithAggregatesInput = {
    AND?: MedicationScalarWhereWithAggregatesInput | MedicationScalarWhereWithAggregatesInput[]
    OR?: MedicationScalarWhereWithAggregatesInput[]
    NOT?: MedicationScalarWhereWithAggregatesInput | MedicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Medication"> | string
    genericName?: StringWithAggregatesFilter<"Medication"> | string
    brandNames?: StringWithAggregatesFilter<"Medication"> | string
    notes?: StringNullableWithAggregatesFilter<"Medication"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Medication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Medication"> | Date | string
  }

  export type ProductVariantWhereInput = {
    AND?: ProductVariantWhereInput | ProductVariantWhereInput[]
    OR?: ProductVariantWhereInput[]
    NOT?: ProductVariantWhereInput | ProductVariantWhereInput[]
    id?: StringFilter<"ProductVariant"> | string
    medicationId?: StringFilter<"ProductVariant"> | string
    strength?: StringNullableFilter<"ProductVariant"> | string | null
    route?: EnumRouteFilter<"ProductVariant"> | $Enums.Route
    dosageForm?: EnumDosageFormFilter<"ProductVariant"> | $Enums.DosageForm
    ndc?: StringNullableFilter<"ProductVariant"> | string | null
    createdAt?: DateTimeFilter<"ProductVariant"> | Date | string
    updatedAt?: DateTimeFilter<"ProductVariant"> | Date | string
    medication?: XOR<MedicationScalarRelationFilter, MedicationWhereInput>
    locations?: LocationListRelationFilter
    placements?: VariantPlacementListRelationFilter
  }

  export type ProductVariantOrderByWithRelationInput = {
    id?: SortOrder
    medicationId?: SortOrder
    strength?: SortOrderInput | SortOrder
    route?: SortOrder
    dosageForm?: SortOrder
    ndc?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    medication?: MedicationOrderByWithRelationInput
    locations?: LocationOrderByRelationAggregateInput
    placements?: VariantPlacementOrderByRelationAggregateInput
  }

  export type ProductVariantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductVariantWhereInput | ProductVariantWhereInput[]
    OR?: ProductVariantWhereInput[]
    NOT?: ProductVariantWhereInput | ProductVariantWhereInput[]
    medicationId?: StringFilter<"ProductVariant"> | string
    strength?: StringNullableFilter<"ProductVariant"> | string | null
    route?: EnumRouteFilter<"ProductVariant"> | $Enums.Route
    dosageForm?: EnumDosageFormFilter<"ProductVariant"> | $Enums.DosageForm
    ndc?: StringNullableFilter<"ProductVariant"> | string | null
    createdAt?: DateTimeFilter<"ProductVariant"> | Date | string
    updatedAt?: DateTimeFilter<"ProductVariant"> | Date | string
    medication?: XOR<MedicationScalarRelationFilter, MedicationWhereInput>
    locations?: LocationListRelationFilter
    placements?: VariantPlacementListRelationFilter
  }, "id">

  export type ProductVariantOrderByWithAggregationInput = {
    id?: SortOrder
    medicationId?: SortOrder
    strength?: SortOrderInput | SortOrder
    route?: SortOrder
    dosageForm?: SortOrder
    ndc?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductVariantCountOrderByAggregateInput
    _max?: ProductVariantMaxOrderByAggregateInput
    _min?: ProductVariantMinOrderByAggregateInput
  }

  export type ProductVariantScalarWhereWithAggregatesInput = {
    AND?: ProductVariantScalarWhereWithAggregatesInput | ProductVariantScalarWhereWithAggregatesInput[]
    OR?: ProductVariantScalarWhereWithAggregatesInput[]
    NOT?: ProductVariantScalarWhereWithAggregatesInput | ProductVariantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductVariant"> | string
    medicationId?: StringWithAggregatesFilter<"ProductVariant"> | string
    strength?: StringNullableWithAggregatesFilter<"ProductVariant"> | string | null
    route?: EnumRouteWithAggregatesFilter<"ProductVariant"> | $Enums.Route
    dosageForm?: EnumDosageFormWithAggregatesFilter<"ProductVariant"> | $Enums.DosageForm
    ndc?: StringNullableWithAggregatesFilter<"ProductVariant"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProductVariant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductVariant"> | Date | string
  }

  export type StorageLocationWhereInput = {
    AND?: StorageLocationWhereInput | StorageLocationWhereInput[]
    OR?: StorageLocationWhereInput[]
    NOT?: StorageLocationWhereInput | StorageLocationWhereInput[]
    id?: StringFilter<"StorageLocation"> | string
    kind?: EnumStorageLocationKindFilter<"StorageLocation"> | $Enums.StorageLocationKind
    area?: EnumStorageAreaFilter<"StorageLocation"> | $Enums.StorageArea
    label?: StringFilter<"StorageLocation"> | string
    notes?: StringNullableFilter<"StorageLocation"> | string | null
    createdAt?: DateTimeFilter<"StorageLocation"> | Date | string
    updatedAt?: DateTimeFilter<"StorageLocation"> | Date | string
    placements?: VariantPlacementListRelationFilter
  }

  export type StorageLocationOrderByWithRelationInput = {
    id?: SortOrder
    kind?: SortOrder
    area?: SortOrder
    label?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    placements?: VariantPlacementOrderByRelationAggregateInput
  }

  export type StorageLocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StorageLocationWhereInput | StorageLocationWhereInput[]
    OR?: StorageLocationWhereInput[]
    NOT?: StorageLocationWhereInput | StorageLocationWhereInput[]
    kind?: EnumStorageLocationKindFilter<"StorageLocation"> | $Enums.StorageLocationKind
    area?: EnumStorageAreaFilter<"StorageLocation"> | $Enums.StorageArea
    label?: StringFilter<"StorageLocation"> | string
    notes?: StringNullableFilter<"StorageLocation"> | string | null
    createdAt?: DateTimeFilter<"StorageLocation"> | Date | string
    updatedAt?: DateTimeFilter<"StorageLocation"> | Date | string
    placements?: VariantPlacementListRelationFilter
  }, "id">

  export type StorageLocationOrderByWithAggregationInput = {
    id?: SortOrder
    kind?: SortOrder
    area?: SortOrder
    label?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StorageLocationCountOrderByAggregateInput
    _max?: StorageLocationMaxOrderByAggregateInput
    _min?: StorageLocationMinOrderByAggregateInput
  }

  export type StorageLocationScalarWhereWithAggregatesInput = {
    AND?: StorageLocationScalarWhereWithAggregatesInput | StorageLocationScalarWhereWithAggregatesInput[]
    OR?: StorageLocationScalarWhereWithAggregatesInput[]
    NOT?: StorageLocationScalarWhereWithAggregatesInput | StorageLocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StorageLocation"> | string
    kind?: EnumStorageLocationKindWithAggregatesFilter<"StorageLocation"> | $Enums.StorageLocationKind
    area?: EnumStorageAreaWithAggregatesFilter<"StorageLocation"> | $Enums.StorageArea
    label?: StringWithAggregatesFilter<"StorageLocation"> | string
    notes?: StringNullableWithAggregatesFilter<"StorageLocation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StorageLocation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StorageLocation"> | Date | string
  }

  export type VariantPlacementWhereInput = {
    AND?: VariantPlacementWhereInput | VariantPlacementWhereInput[]
    OR?: VariantPlacementWhereInput[]
    NOT?: VariantPlacementWhereInput | VariantPlacementWhereInput[]
    id?: StringFilter<"VariantPlacement"> | string
    productVariantId?: StringFilter<"VariantPlacement"> | string
    storageLocationId?: StringFilter<"VariantPlacement"> | string
    isPrimary?: BoolFilter<"VariantPlacement"> | boolean
    cassetteNumber?: StringNullableFilter<"VariantPlacement"> | string | null
    notes?: StringNullableFilter<"VariantPlacement"> | string | null
    createdAt?: DateTimeFilter<"VariantPlacement"> | Date | string
    updatedAt?: DateTimeFilter<"VariantPlacement"> | Date | string
    productVariant?: XOR<ProductVariantScalarRelationFilter, ProductVariantWhereInput>
    storageLocation?: XOR<StorageLocationScalarRelationFilter, StorageLocationWhereInput>
  }

  export type VariantPlacementOrderByWithRelationInput = {
    id?: SortOrder
    productVariantId?: SortOrder
    storageLocationId?: SortOrder
    isPrimary?: SortOrder
    cassetteNumber?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productVariant?: ProductVariantOrderByWithRelationInput
    storageLocation?: StorageLocationOrderByWithRelationInput
  }

  export type VariantPlacementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VariantPlacementWhereInput | VariantPlacementWhereInput[]
    OR?: VariantPlacementWhereInput[]
    NOT?: VariantPlacementWhereInput | VariantPlacementWhereInput[]
    productVariantId?: StringFilter<"VariantPlacement"> | string
    storageLocationId?: StringFilter<"VariantPlacement"> | string
    isPrimary?: BoolFilter<"VariantPlacement"> | boolean
    cassetteNumber?: StringNullableFilter<"VariantPlacement"> | string | null
    notes?: StringNullableFilter<"VariantPlacement"> | string | null
    createdAt?: DateTimeFilter<"VariantPlacement"> | Date | string
    updatedAt?: DateTimeFilter<"VariantPlacement"> | Date | string
    productVariant?: XOR<ProductVariantScalarRelationFilter, ProductVariantWhereInput>
    storageLocation?: XOR<StorageLocationScalarRelationFilter, StorageLocationWhereInput>
  }, "id">

  export type VariantPlacementOrderByWithAggregationInput = {
    id?: SortOrder
    productVariantId?: SortOrder
    storageLocationId?: SortOrder
    isPrimary?: SortOrder
    cassetteNumber?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VariantPlacementCountOrderByAggregateInput
    _max?: VariantPlacementMaxOrderByAggregateInput
    _min?: VariantPlacementMinOrderByAggregateInput
  }

  export type VariantPlacementScalarWhereWithAggregatesInput = {
    AND?: VariantPlacementScalarWhereWithAggregatesInput | VariantPlacementScalarWhereWithAggregatesInput[]
    OR?: VariantPlacementScalarWhereWithAggregatesInput[]
    NOT?: VariantPlacementScalarWhereWithAggregatesInput | VariantPlacementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VariantPlacement"> | string
    productVariantId?: StringWithAggregatesFilter<"VariantPlacement"> | string
    storageLocationId?: StringWithAggregatesFilter<"VariantPlacement"> | string
    isPrimary?: BoolWithAggregatesFilter<"VariantPlacement"> | boolean
    cassetteNumber?: StringNullableWithAggregatesFilter<"VariantPlacement"> | string | null
    notes?: StringNullableWithAggregatesFilter<"VariantPlacement"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"VariantPlacement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VariantPlacement"> | Date | string
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: StringFilter<"Location"> | string
    productVariantId?: StringFilter<"Location"> | string
    area?: EnumStorageAreaFilter<"Location"> | $Enums.StorageArea
    label?: StringFilter<"Location"> | string
    cassetteNumber?: StringNullableFilter<"Location"> | string | null
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    productVariant?: XOR<ProductVariantScalarRelationFilter, ProductVariantWhereInput>
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    productVariantId?: SortOrder
    area?: SortOrder
    label?: SortOrder
    cassetteNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productVariant?: ProductVariantOrderByWithRelationInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    productVariantId?: StringFilter<"Location"> | string
    area?: EnumStorageAreaFilter<"Location"> | $Enums.StorageArea
    label?: StringFilter<"Location"> | string
    cassetteNumber?: StringNullableFilter<"Location"> | string | null
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    productVariant?: XOR<ProductVariantScalarRelationFilter, ProductVariantWhereInput>
  }, "id">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    productVariantId?: SortOrder
    area?: SortOrder
    label?: SortOrder
    cassetteNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Location"> | string
    productVariantId?: StringWithAggregatesFilter<"Location"> | string
    area?: EnumStorageAreaWithAggregatesFilter<"Location"> | $Enums.StorageArea
    label?: StringWithAggregatesFilter<"Location"> | string
    cassetteNumber?: StringNullableWithAggregatesFilter<"Location"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
  }

  export type MedicationCreateInput = {
    id?: string
    genericName: string
    brandNames?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    variants?: ProductVariantCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUncheckedCreateInput = {
    id?: string
    genericName: string
    brandNames?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    variants?: ProductVariantUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    brandNames?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variants?: ProductVariantUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    brandNames?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variants?: ProductVariantUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationCreateManyInput = {
    id?: string
    genericName: string
    brandNames?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    brandNames?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    brandNames?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVariantCreateInput = {
    id?: string
    strength?: string | null
    route?: $Enums.Route
    dosageForm?: $Enums.DosageForm
    ndc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medication: MedicationCreateNestedOneWithoutVariantsInput
    locations?: LocationCreateNestedManyWithoutProductVariantInput
    placements?: VariantPlacementCreateNestedManyWithoutProductVariantInput
  }

  export type ProductVariantUncheckedCreateInput = {
    id?: string
    medicationId: string
    strength?: string | null
    route?: $Enums.Route
    dosageForm?: $Enums.DosageForm
    ndc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: LocationUncheckedCreateNestedManyWithoutProductVariantInput
    placements?: VariantPlacementUncheckedCreateNestedManyWithoutProductVariantInput
  }

  export type ProductVariantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    strength?: NullableStringFieldUpdateOperationsInput | string | null
    route?: EnumRouteFieldUpdateOperationsInput | $Enums.Route
    dosageForm?: EnumDosageFormFieldUpdateOperationsInput | $Enums.DosageForm
    ndc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medication?: MedicationUpdateOneRequiredWithoutVariantsNestedInput
    locations?: LocationUpdateManyWithoutProductVariantNestedInput
    placements?: VariantPlacementUpdateManyWithoutProductVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    strength?: NullableStringFieldUpdateOperationsInput | string | null
    route?: EnumRouteFieldUpdateOperationsInput | $Enums.Route
    dosageForm?: EnumDosageFormFieldUpdateOperationsInput | $Enums.DosageForm
    ndc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationUncheckedUpdateManyWithoutProductVariantNestedInput
    placements?: VariantPlacementUncheckedUpdateManyWithoutProductVariantNestedInput
  }

  export type ProductVariantCreateManyInput = {
    id?: string
    medicationId: string
    strength?: string | null
    route?: $Enums.Route
    dosageForm?: $Enums.DosageForm
    ndc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductVariantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    strength?: NullableStringFieldUpdateOperationsInput | string | null
    route?: EnumRouteFieldUpdateOperationsInput | $Enums.Route
    dosageForm?: EnumDosageFormFieldUpdateOperationsInput | $Enums.DosageForm
    ndc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVariantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    strength?: NullableStringFieldUpdateOperationsInput | string | null
    route?: EnumRouteFieldUpdateOperationsInput | $Enums.Route
    dosageForm?: EnumDosageFormFieldUpdateOperationsInput | $Enums.DosageForm
    ndc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StorageLocationCreateInput = {
    id?: string
    kind?: $Enums.StorageLocationKind
    area: $Enums.StorageArea
    label: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    placements?: VariantPlacementCreateNestedManyWithoutStorageLocationInput
  }

  export type StorageLocationUncheckedCreateInput = {
    id?: string
    kind?: $Enums.StorageLocationKind
    area: $Enums.StorageArea
    label: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    placements?: VariantPlacementUncheckedCreateNestedManyWithoutStorageLocationInput
  }

  export type StorageLocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kind?: EnumStorageLocationKindFieldUpdateOperationsInput | $Enums.StorageLocationKind
    area?: EnumStorageAreaFieldUpdateOperationsInput | $Enums.StorageArea
    label?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    placements?: VariantPlacementUpdateManyWithoutStorageLocationNestedInput
  }

  export type StorageLocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kind?: EnumStorageLocationKindFieldUpdateOperationsInput | $Enums.StorageLocationKind
    area?: EnumStorageAreaFieldUpdateOperationsInput | $Enums.StorageArea
    label?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    placements?: VariantPlacementUncheckedUpdateManyWithoutStorageLocationNestedInput
  }

  export type StorageLocationCreateManyInput = {
    id?: string
    kind?: $Enums.StorageLocationKind
    area: $Enums.StorageArea
    label: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StorageLocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    kind?: EnumStorageLocationKindFieldUpdateOperationsInput | $Enums.StorageLocationKind
    area?: EnumStorageAreaFieldUpdateOperationsInput | $Enums.StorageArea
    label?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StorageLocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    kind?: EnumStorageLocationKindFieldUpdateOperationsInput | $Enums.StorageLocationKind
    area?: EnumStorageAreaFieldUpdateOperationsInput | $Enums.StorageArea
    label?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantPlacementCreateInput = {
    id?: string
    isPrimary?: boolean
    cassetteNumber?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productVariant: ProductVariantCreateNestedOneWithoutPlacementsInput
    storageLocation: StorageLocationCreateNestedOneWithoutPlacementsInput
  }

  export type VariantPlacementUncheckedCreateInput = {
    id?: string
    productVariantId: string
    storageLocationId: string
    isPrimary?: boolean
    cassetteNumber?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VariantPlacementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    cassetteNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productVariant?: ProductVariantUpdateOneRequiredWithoutPlacementsNestedInput
    storageLocation?: StorageLocationUpdateOneRequiredWithoutPlacementsNestedInput
  }

  export type VariantPlacementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productVariantId?: StringFieldUpdateOperationsInput | string
    storageLocationId?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    cassetteNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantPlacementCreateManyInput = {
    id?: string
    productVariantId: string
    storageLocationId: string
    isPrimary?: boolean
    cassetteNumber?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VariantPlacementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    cassetteNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantPlacementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productVariantId?: StringFieldUpdateOperationsInput | string
    storageLocationId?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    cassetteNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationCreateInput = {
    id?: string
    area: $Enums.StorageArea
    label: string
    cassetteNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productVariant: ProductVariantCreateNestedOneWithoutLocationsInput
  }

  export type LocationUncheckedCreateInput = {
    id?: string
    productVariantId: string
    area: $Enums.StorageArea
    label: string
    cassetteNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    area?: EnumStorageAreaFieldUpdateOperationsInput | $Enums.StorageArea
    label?: StringFieldUpdateOperationsInput | string
    cassetteNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productVariant?: ProductVariantUpdateOneRequiredWithoutLocationsNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productVariantId?: StringFieldUpdateOperationsInput | string
    area?: EnumStorageAreaFieldUpdateOperationsInput | $Enums.StorageArea
    label?: StringFieldUpdateOperationsInput | string
    cassetteNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationCreateManyInput = {
    id?: string
    productVariantId: string
    area: $Enums.StorageArea
    label: string
    cassetteNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    area?: EnumStorageAreaFieldUpdateOperationsInput | $Enums.StorageArea
    label?: StringFieldUpdateOperationsInput | string
    cassetteNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productVariantId?: StringFieldUpdateOperationsInput | string
    area?: EnumStorageAreaFieldUpdateOperationsInput | $Enums.StorageArea
    label?: StringFieldUpdateOperationsInput | string
    cassetteNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type ProductVariantListRelationFilter = {
    every?: ProductVariantWhereInput
    some?: ProductVariantWhereInput
    none?: ProductVariantWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductVariantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicationCountOrderByAggregateInput = {
    id?: SortOrder
    genericName?: SortOrder
    brandNames?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicationMaxOrderByAggregateInput = {
    id?: SortOrder
    genericName?: SortOrder
    brandNames?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicationMinOrderByAggregateInput = {
    id?: SortOrder
    genericName?: SortOrder
    brandNames?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type EnumRouteFilter<$PrismaModel = never> = {
    equals?: $Enums.Route | EnumRouteFieldRefInput<$PrismaModel>
    in?: $Enums.Route[]
    notIn?: $Enums.Route[]
    not?: NestedEnumRouteFilter<$PrismaModel> | $Enums.Route
  }

  export type EnumDosageFormFilter<$PrismaModel = never> = {
    equals?: $Enums.DosageForm | EnumDosageFormFieldRefInput<$PrismaModel>
    in?: $Enums.DosageForm[]
    notIn?: $Enums.DosageForm[]
    not?: NestedEnumDosageFormFilter<$PrismaModel> | $Enums.DosageForm
  }

  export type MedicationScalarRelationFilter = {
    is?: MedicationWhereInput
    isNot?: MedicationWhereInput
  }

  export type LocationListRelationFilter = {
    every?: LocationWhereInput
    some?: LocationWhereInput
    none?: LocationWhereInput
  }

  export type VariantPlacementListRelationFilter = {
    every?: VariantPlacementWhereInput
    some?: VariantPlacementWhereInput
    none?: VariantPlacementWhereInput
  }

  export type LocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VariantPlacementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductVariantCountOrderByAggregateInput = {
    id?: SortOrder
    medicationId?: SortOrder
    strength?: SortOrder
    route?: SortOrder
    dosageForm?: SortOrder
    ndc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductVariantMaxOrderByAggregateInput = {
    id?: SortOrder
    medicationId?: SortOrder
    strength?: SortOrder
    route?: SortOrder
    dosageForm?: SortOrder
    ndc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductVariantMinOrderByAggregateInput = {
    id?: SortOrder
    medicationId?: SortOrder
    strength?: SortOrder
    route?: SortOrder
    dosageForm?: SortOrder
    ndc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRouteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Route | EnumRouteFieldRefInput<$PrismaModel>
    in?: $Enums.Route[]
    notIn?: $Enums.Route[]
    not?: NestedEnumRouteWithAggregatesFilter<$PrismaModel> | $Enums.Route
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRouteFilter<$PrismaModel>
    _max?: NestedEnumRouteFilter<$PrismaModel>
  }

  export type EnumDosageFormWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DosageForm | EnumDosageFormFieldRefInput<$PrismaModel>
    in?: $Enums.DosageForm[]
    notIn?: $Enums.DosageForm[]
    not?: NestedEnumDosageFormWithAggregatesFilter<$PrismaModel> | $Enums.DosageForm
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDosageFormFilter<$PrismaModel>
    _max?: NestedEnumDosageFormFilter<$PrismaModel>
  }

  export type EnumStorageLocationKindFilter<$PrismaModel = never> = {
    equals?: $Enums.StorageLocationKind | EnumStorageLocationKindFieldRefInput<$PrismaModel>
    in?: $Enums.StorageLocationKind[]
    notIn?: $Enums.StorageLocationKind[]
    not?: NestedEnumStorageLocationKindFilter<$PrismaModel> | $Enums.StorageLocationKind
  }

  export type EnumStorageAreaFilter<$PrismaModel = never> = {
    equals?: $Enums.StorageArea | EnumStorageAreaFieldRefInput<$PrismaModel>
    in?: $Enums.StorageArea[]
    notIn?: $Enums.StorageArea[]
    not?: NestedEnumStorageAreaFilter<$PrismaModel> | $Enums.StorageArea
  }

  export type StorageLocationCountOrderByAggregateInput = {
    id?: SortOrder
    kind?: SortOrder
    area?: SortOrder
    label?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StorageLocationMaxOrderByAggregateInput = {
    id?: SortOrder
    kind?: SortOrder
    area?: SortOrder
    label?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StorageLocationMinOrderByAggregateInput = {
    id?: SortOrder
    kind?: SortOrder
    area?: SortOrder
    label?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumStorageLocationKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StorageLocationKind | EnumStorageLocationKindFieldRefInput<$PrismaModel>
    in?: $Enums.StorageLocationKind[]
    notIn?: $Enums.StorageLocationKind[]
    not?: NestedEnumStorageLocationKindWithAggregatesFilter<$PrismaModel> | $Enums.StorageLocationKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStorageLocationKindFilter<$PrismaModel>
    _max?: NestedEnumStorageLocationKindFilter<$PrismaModel>
  }

  export type EnumStorageAreaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StorageArea | EnumStorageAreaFieldRefInput<$PrismaModel>
    in?: $Enums.StorageArea[]
    notIn?: $Enums.StorageArea[]
    not?: NestedEnumStorageAreaWithAggregatesFilter<$PrismaModel> | $Enums.StorageArea
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStorageAreaFilter<$PrismaModel>
    _max?: NestedEnumStorageAreaFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProductVariantScalarRelationFilter = {
    is?: ProductVariantWhereInput
    isNot?: ProductVariantWhereInput
  }

  export type StorageLocationScalarRelationFilter = {
    is?: StorageLocationWhereInput
    isNot?: StorageLocationWhereInput
  }

  export type VariantPlacementCountOrderByAggregateInput = {
    id?: SortOrder
    productVariantId?: SortOrder
    storageLocationId?: SortOrder
    isPrimary?: SortOrder
    cassetteNumber?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VariantPlacementMaxOrderByAggregateInput = {
    id?: SortOrder
    productVariantId?: SortOrder
    storageLocationId?: SortOrder
    isPrimary?: SortOrder
    cassetteNumber?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VariantPlacementMinOrderByAggregateInput = {
    id?: SortOrder
    productVariantId?: SortOrder
    storageLocationId?: SortOrder
    isPrimary?: SortOrder
    cassetteNumber?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    productVariantId?: SortOrder
    area?: SortOrder
    label?: SortOrder
    cassetteNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    productVariantId?: SortOrder
    area?: SortOrder
    label?: SortOrder
    cassetteNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    productVariantId?: SortOrder
    area?: SortOrder
    label?: SortOrder
    cassetteNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductVariantCreateNestedManyWithoutMedicationInput = {
    create?: XOR<ProductVariantCreateWithoutMedicationInput, ProductVariantUncheckedCreateWithoutMedicationInput> | ProductVariantCreateWithoutMedicationInput[] | ProductVariantUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutMedicationInput | ProductVariantCreateOrConnectWithoutMedicationInput[]
    createMany?: ProductVariantCreateManyMedicationInputEnvelope
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
  }

  export type ProductVariantUncheckedCreateNestedManyWithoutMedicationInput = {
    create?: XOR<ProductVariantCreateWithoutMedicationInput, ProductVariantUncheckedCreateWithoutMedicationInput> | ProductVariantCreateWithoutMedicationInput[] | ProductVariantUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutMedicationInput | ProductVariantCreateOrConnectWithoutMedicationInput[]
    createMany?: ProductVariantCreateManyMedicationInputEnvelope
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProductVariantUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<ProductVariantCreateWithoutMedicationInput, ProductVariantUncheckedCreateWithoutMedicationInput> | ProductVariantCreateWithoutMedicationInput[] | ProductVariantUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutMedicationInput | ProductVariantCreateOrConnectWithoutMedicationInput[]
    upsert?: ProductVariantUpsertWithWhereUniqueWithoutMedicationInput | ProductVariantUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: ProductVariantCreateManyMedicationInputEnvelope
    set?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    disconnect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    delete?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    update?: ProductVariantUpdateWithWhereUniqueWithoutMedicationInput | ProductVariantUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: ProductVariantUpdateManyWithWhereWithoutMedicationInput | ProductVariantUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
  }

  export type ProductVariantUncheckedUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<ProductVariantCreateWithoutMedicationInput, ProductVariantUncheckedCreateWithoutMedicationInput> | ProductVariantCreateWithoutMedicationInput[] | ProductVariantUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutMedicationInput | ProductVariantCreateOrConnectWithoutMedicationInput[]
    upsert?: ProductVariantUpsertWithWhereUniqueWithoutMedicationInput | ProductVariantUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: ProductVariantCreateManyMedicationInputEnvelope
    set?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    disconnect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    delete?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    update?: ProductVariantUpdateWithWhereUniqueWithoutMedicationInput | ProductVariantUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: ProductVariantUpdateManyWithWhereWithoutMedicationInput | ProductVariantUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
  }

  export type MedicationCreateNestedOneWithoutVariantsInput = {
    create?: XOR<MedicationCreateWithoutVariantsInput, MedicationUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: MedicationCreateOrConnectWithoutVariantsInput
    connect?: MedicationWhereUniqueInput
  }

  export type LocationCreateNestedManyWithoutProductVariantInput = {
    create?: XOR<LocationCreateWithoutProductVariantInput, LocationUncheckedCreateWithoutProductVariantInput> | LocationCreateWithoutProductVariantInput[] | LocationUncheckedCreateWithoutProductVariantInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutProductVariantInput | LocationCreateOrConnectWithoutProductVariantInput[]
    createMany?: LocationCreateManyProductVariantInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type VariantPlacementCreateNestedManyWithoutProductVariantInput = {
    create?: XOR<VariantPlacementCreateWithoutProductVariantInput, VariantPlacementUncheckedCreateWithoutProductVariantInput> | VariantPlacementCreateWithoutProductVariantInput[] | VariantPlacementUncheckedCreateWithoutProductVariantInput[]
    connectOrCreate?: VariantPlacementCreateOrConnectWithoutProductVariantInput | VariantPlacementCreateOrConnectWithoutProductVariantInput[]
    createMany?: VariantPlacementCreateManyProductVariantInputEnvelope
    connect?: VariantPlacementWhereUniqueInput | VariantPlacementWhereUniqueInput[]
  }

  export type LocationUncheckedCreateNestedManyWithoutProductVariantInput = {
    create?: XOR<LocationCreateWithoutProductVariantInput, LocationUncheckedCreateWithoutProductVariantInput> | LocationCreateWithoutProductVariantInput[] | LocationUncheckedCreateWithoutProductVariantInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutProductVariantInput | LocationCreateOrConnectWithoutProductVariantInput[]
    createMany?: LocationCreateManyProductVariantInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type VariantPlacementUncheckedCreateNestedManyWithoutProductVariantInput = {
    create?: XOR<VariantPlacementCreateWithoutProductVariantInput, VariantPlacementUncheckedCreateWithoutProductVariantInput> | VariantPlacementCreateWithoutProductVariantInput[] | VariantPlacementUncheckedCreateWithoutProductVariantInput[]
    connectOrCreate?: VariantPlacementCreateOrConnectWithoutProductVariantInput | VariantPlacementCreateOrConnectWithoutProductVariantInput[]
    createMany?: VariantPlacementCreateManyProductVariantInputEnvelope
    connect?: VariantPlacementWhereUniqueInput | VariantPlacementWhereUniqueInput[]
  }

  export type EnumRouteFieldUpdateOperationsInput = {
    set?: $Enums.Route
  }

  export type EnumDosageFormFieldUpdateOperationsInput = {
    set?: $Enums.DosageForm
  }

  export type MedicationUpdateOneRequiredWithoutVariantsNestedInput = {
    create?: XOR<MedicationCreateWithoutVariantsInput, MedicationUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: MedicationCreateOrConnectWithoutVariantsInput
    upsert?: MedicationUpsertWithoutVariantsInput
    connect?: MedicationWhereUniqueInput
    update?: XOR<XOR<MedicationUpdateToOneWithWhereWithoutVariantsInput, MedicationUpdateWithoutVariantsInput>, MedicationUncheckedUpdateWithoutVariantsInput>
  }

  export type LocationUpdateManyWithoutProductVariantNestedInput = {
    create?: XOR<LocationCreateWithoutProductVariantInput, LocationUncheckedCreateWithoutProductVariantInput> | LocationCreateWithoutProductVariantInput[] | LocationUncheckedCreateWithoutProductVariantInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutProductVariantInput | LocationCreateOrConnectWithoutProductVariantInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutProductVariantInput | LocationUpsertWithWhereUniqueWithoutProductVariantInput[]
    createMany?: LocationCreateManyProductVariantInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutProductVariantInput | LocationUpdateWithWhereUniqueWithoutProductVariantInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutProductVariantInput | LocationUpdateManyWithWhereWithoutProductVariantInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type VariantPlacementUpdateManyWithoutProductVariantNestedInput = {
    create?: XOR<VariantPlacementCreateWithoutProductVariantInput, VariantPlacementUncheckedCreateWithoutProductVariantInput> | VariantPlacementCreateWithoutProductVariantInput[] | VariantPlacementUncheckedCreateWithoutProductVariantInput[]
    connectOrCreate?: VariantPlacementCreateOrConnectWithoutProductVariantInput | VariantPlacementCreateOrConnectWithoutProductVariantInput[]
    upsert?: VariantPlacementUpsertWithWhereUniqueWithoutProductVariantInput | VariantPlacementUpsertWithWhereUniqueWithoutProductVariantInput[]
    createMany?: VariantPlacementCreateManyProductVariantInputEnvelope
    set?: VariantPlacementWhereUniqueInput | VariantPlacementWhereUniqueInput[]
    disconnect?: VariantPlacementWhereUniqueInput | VariantPlacementWhereUniqueInput[]
    delete?: VariantPlacementWhereUniqueInput | VariantPlacementWhereUniqueInput[]
    connect?: VariantPlacementWhereUniqueInput | VariantPlacementWhereUniqueInput[]
    update?: VariantPlacementUpdateWithWhereUniqueWithoutProductVariantInput | VariantPlacementUpdateWithWhereUniqueWithoutProductVariantInput[]
    updateMany?: VariantPlacementUpdateManyWithWhereWithoutProductVariantInput | VariantPlacementUpdateManyWithWhereWithoutProductVariantInput[]
    deleteMany?: VariantPlacementScalarWhereInput | VariantPlacementScalarWhereInput[]
  }

  export type LocationUncheckedUpdateManyWithoutProductVariantNestedInput = {
    create?: XOR<LocationCreateWithoutProductVariantInput, LocationUncheckedCreateWithoutProductVariantInput> | LocationCreateWithoutProductVariantInput[] | LocationUncheckedCreateWithoutProductVariantInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutProductVariantInput | LocationCreateOrConnectWithoutProductVariantInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutProductVariantInput | LocationUpsertWithWhereUniqueWithoutProductVariantInput[]
    createMany?: LocationCreateManyProductVariantInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutProductVariantInput | LocationUpdateWithWhereUniqueWithoutProductVariantInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutProductVariantInput | LocationUpdateManyWithWhereWithoutProductVariantInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type VariantPlacementUncheckedUpdateManyWithoutProductVariantNestedInput = {
    create?: XOR<VariantPlacementCreateWithoutProductVariantInput, VariantPlacementUncheckedCreateWithoutProductVariantInput> | VariantPlacementCreateWithoutProductVariantInput[] | VariantPlacementUncheckedCreateWithoutProductVariantInput[]
    connectOrCreate?: VariantPlacementCreateOrConnectWithoutProductVariantInput | VariantPlacementCreateOrConnectWithoutProductVariantInput[]
    upsert?: VariantPlacementUpsertWithWhereUniqueWithoutProductVariantInput | VariantPlacementUpsertWithWhereUniqueWithoutProductVariantInput[]
    createMany?: VariantPlacementCreateManyProductVariantInputEnvelope
    set?: VariantPlacementWhereUniqueInput | VariantPlacementWhereUniqueInput[]
    disconnect?: VariantPlacementWhereUniqueInput | VariantPlacementWhereUniqueInput[]
    delete?: VariantPlacementWhereUniqueInput | VariantPlacementWhereUniqueInput[]
    connect?: VariantPlacementWhereUniqueInput | VariantPlacementWhereUniqueInput[]
    update?: VariantPlacementUpdateWithWhereUniqueWithoutProductVariantInput | VariantPlacementUpdateWithWhereUniqueWithoutProductVariantInput[]
    updateMany?: VariantPlacementUpdateManyWithWhereWithoutProductVariantInput | VariantPlacementUpdateManyWithWhereWithoutProductVariantInput[]
    deleteMany?: VariantPlacementScalarWhereInput | VariantPlacementScalarWhereInput[]
  }

  export type VariantPlacementCreateNestedManyWithoutStorageLocationInput = {
    create?: XOR<VariantPlacementCreateWithoutStorageLocationInput, VariantPlacementUncheckedCreateWithoutStorageLocationInput> | VariantPlacementCreateWithoutStorageLocationInput[] | VariantPlacementUncheckedCreateWithoutStorageLocationInput[]
    connectOrCreate?: VariantPlacementCreateOrConnectWithoutStorageLocationInput | VariantPlacementCreateOrConnectWithoutStorageLocationInput[]
    createMany?: VariantPlacementCreateManyStorageLocationInputEnvelope
    connect?: VariantPlacementWhereUniqueInput | VariantPlacementWhereUniqueInput[]
  }

  export type VariantPlacementUncheckedCreateNestedManyWithoutStorageLocationInput = {
    create?: XOR<VariantPlacementCreateWithoutStorageLocationInput, VariantPlacementUncheckedCreateWithoutStorageLocationInput> | VariantPlacementCreateWithoutStorageLocationInput[] | VariantPlacementUncheckedCreateWithoutStorageLocationInput[]
    connectOrCreate?: VariantPlacementCreateOrConnectWithoutStorageLocationInput | VariantPlacementCreateOrConnectWithoutStorageLocationInput[]
    createMany?: VariantPlacementCreateManyStorageLocationInputEnvelope
    connect?: VariantPlacementWhereUniqueInput | VariantPlacementWhereUniqueInput[]
  }

  export type EnumStorageLocationKindFieldUpdateOperationsInput = {
    set?: $Enums.StorageLocationKind
  }

  export type EnumStorageAreaFieldUpdateOperationsInput = {
    set?: $Enums.StorageArea
  }

  export type VariantPlacementUpdateManyWithoutStorageLocationNestedInput = {
    create?: XOR<VariantPlacementCreateWithoutStorageLocationInput, VariantPlacementUncheckedCreateWithoutStorageLocationInput> | VariantPlacementCreateWithoutStorageLocationInput[] | VariantPlacementUncheckedCreateWithoutStorageLocationInput[]
    connectOrCreate?: VariantPlacementCreateOrConnectWithoutStorageLocationInput | VariantPlacementCreateOrConnectWithoutStorageLocationInput[]
    upsert?: VariantPlacementUpsertWithWhereUniqueWithoutStorageLocationInput | VariantPlacementUpsertWithWhereUniqueWithoutStorageLocationInput[]
    createMany?: VariantPlacementCreateManyStorageLocationInputEnvelope
    set?: VariantPlacementWhereUniqueInput | VariantPlacementWhereUniqueInput[]
    disconnect?: VariantPlacementWhereUniqueInput | VariantPlacementWhereUniqueInput[]
    delete?: VariantPlacementWhereUniqueInput | VariantPlacementWhereUniqueInput[]
    connect?: VariantPlacementWhereUniqueInput | VariantPlacementWhereUniqueInput[]
    update?: VariantPlacementUpdateWithWhereUniqueWithoutStorageLocationInput | VariantPlacementUpdateWithWhereUniqueWithoutStorageLocationInput[]
    updateMany?: VariantPlacementUpdateManyWithWhereWithoutStorageLocationInput | VariantPlacementUpdateManyWithWhereWithoutStorageLocationInput[]
    deleteMany?: VariantPlacementScalarWhereInput | VariantPlacementScalarWhereInput[]
  }

  export type VariantPlacementUncheckedUpdateManyWithoutStorageLocationNestedInput = {
    create?: XOR<VariantPlacementCreateWithoutStorageLocationInput, VariantPlacementUncheckedCreateWithoutStorageLocationInput> | VariantPlacementCreateWithoutStorageLocationInput[] | VariantPlacementUncheckedCreateWithoutStorageLocationInput[]
    connectOrCreate?: VariantPlacementCreateOrConnectWithoutStorageLocationInput | VariantPlacementCreateOrConnectWithoutStorageLocationInput[]
    upsert?: VariantPlacementUpsertWithWhereUniqueWithoutStorageLocationInput | VariantPlacementUpsertWithWhereUniqueWithoutStorageLocationInput[]
    createMany?: VariantPlacementCreateManyStorageLocationInputEnvelope
    set?: VariantPlacementWhereUniqueInput | VariantPlacementWhereUniqueInput[]
    disconnect?: VariantPlacementWhereUniqueInput | VariantPlacementWhereUniqueInput[]
    delete?: VariantPlacementWhereUniqueInput | VariantPlacementWhereUniqueInput[]
    connect?: VariantPlacementWhereUniqueInput | VariantPlacementWhereUniqueInput[]
    update?: VariantPlacementUpdateWithWhereUniqueWithoutStorageLocationInput | VariantPlacementUpdateWithWhereUniqueWithoutStorageLocationInput[]
    updateMany?: VariantPlacementUpdateManyWithWhereWithoutStorageLocationInput | VariantPlacementUpdateManyWithWhereWithoutStorageLocationInput[]
    deleteMany?: VariantPlacementScalarWhereInput | VariantPlacementScalarWhereInput[]
  }

  export type ProductVariantCreateNestedOneWithoutPlacementsInput = {
    create?: XOR<ProductVariantCreateWithoutPlacementsInput, ProductVariantUncheckedCreateWithoutPlacementsInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutPlacementsInput
    connect?: ProductVariantWhereUniqueInput
  }

  export type StorageLocationCreateNestedOneWithoutPlacementsInput = {
    create?: XOR<StorageLocationCreateWithoutPlacementsInput, StorageLocationUncheckedCreateWithoutPlacementsInput>
    connectOrCreate?: StorageLocationCreateOrConnectWithoutPlacementsInput
    connect?: StorageLocationWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProductVariantUpdateOneRequiredWithoutPlacementsNestedInput = {
    create?: XOR<ProductVariantCreateWithoutPlacementsInput, ProductVariantUncheckedCreateWithoutPlacementsInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutPlacementsInput
    upsert?: ProductVariantUpsertWithoutPlacementsInput
    connect?: ProductVariantWhereUniqueInput
    update?: XOR<XOR<ProductVariantUpdateToOneWithWhereWithoutPlacementsInput, ProductVariantUpdateWithoutPlacementsInput>, ProductVariantUncheckedUpdateWithoutPlacementsInput>
  }

  export type StorageLocationUpdateOneRequiredWithoutPlacementsNestedInput = {
    create?: XOR<StorageLocationCreateWithoutPlacementsInput, StorageLocationUncheckedCreateWithoutPlacementsInput>
    connectOrCreate?: StorageLocationCreateOrConnectWithoutPlacementsInput
    upsert?: StorageLocationUpsertWithoutPlacementsInput
    connect?: StorageLocationWhereUniqueInput
    update?: XOR<XOR<StorageLocationUpdateToOneWithWhereWithoutPlacementsInput, StorageLocationUpdateWithoutPlacementsInput>, StorageLocationUncheckedUpdateWithoutPlacementsInput>
  }

  export type ProductVariantCreateNestedOneWithoutLocationsInput = {
    create?: XOR<ProductVariantCreateWithoutLocationsInput, ProductVariantUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutLocationsInput
    connect?: ProductVariantWhereUniqueInput
  }

  export type ProductVariantUpdateOneRequiredWithoutLocationsNestedInput = {
    create?: XOR<ProductVariantCreateWithoutLocationsInput, ProductVariantUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutLocationsInput
    upsert?: ProductVariantUpsertWithoutLocationsInput
    connect?: ProductVariantWhereUniqueInput
    update?: XOR<XOR<ProductVariantUpdateToOneWithWhereWithoutLocationsInput, ProductVariantUpdateWithoutLocationsInput>, ProductVariantUncheckedUpdateWithoutLocationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedEnumRouteFilter<$PrismaModel = never> = {
    equals?: $Enums.Route | EnumRouteFieldRefInput<$PrismaModel>
    in?: $Enums.Route[]
    notIn?: $Enums.Route[]
    not?: NestedEnumRouteFilter<$PrismaModel> | $Enums.Route
  }

  export type NestedEnumDosageFormFilter<$PrismaModel = never> = {
    equals?: $Enums.DosageForm | EnumDosageFormFieldRefInput<$PrismaModel>
    in?: $Enums.DosageForm[]
    notIn?: $Enums.DosageForm[]
    not?: NestedEnumDosageFormFilter<$PrismaModel> | $Enums.DosageForm
  }

  export type NestedEnumRouteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Route | EnumRouteFieldRefInput<$PrismaModel>
    in?: $Enums.Route[]
    notIn?: $Enums.Route[]
    not?: NestedEnumRouteWithAggregatesFilter<$PrismaModel> | $Enums.Route
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRouteFilter<$PrismaModel>
    _max?: NestedEnumRouteFilter<$PrismaModel>
  }

  export type NestedEnumDosageFormWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DosageForm | EnumDosageFormFieldRefInput<$PrismaModel>
    in?: $Enums.DosageForm[]
    notIn?: $Enums.DosageForm[]
    not?: NestedEnumDosageFormWithAggregatesFilter<$PrismaModel> | $Enums.DosageForm
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDosageFormFilter<$PrismaModel>
    _max?: NestedEnumDosageFormFilter<$PrismaModel>
  }

  export type NestedEnumStorageLocationKindFilter<$PrismaModel = never> = {
    equals?: $Enums.StorageLocationKind | EnumStorageLocationKindFieldRefInput<$PrismaModel>
    in?: $Enums.StorageLocationKind[]
    notIn?: $Enums.StorageLocationKind[]
    not?: NestedEnumStorageLocationKindFilter<$PrismaModel> | $Enums.StorageLocationKind
  }

  export type NestedEnumStorageAreaFilter<$PrismaModel = never> = {
    equals?: $Enums.StorageArea | EnumStorageAreaFieldRefInput<$PrismaModel>
    in?: $Enums.StorageArea[]
    notIn?: $Enums.StorageArea[]
    not?: NestedEnumStorageAreaFilter<$PrismaModel> | $Enums.StorageArea
  }

  export type NestedEnumStorageLocationKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StorageLocationKind | EnumStorageLocationKindFieldRefInput<$PrismaModel>
    in?: $Enums.StorageLocationKind[]
    notIn?: $Enums.StorageLocationKind[]
    not?: NestedEnumStorageLocationKindWithAggregatesFilter<$PrismaModel> | $Enums.StorageLocationKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStorageLocationKindFilter<$PrismaModel>
    _max?: NestedEnumStorageLocationKindFilter<$PrismaModel>
  }

  export type NestedEnumStorageAreaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StorageArea | EnumStorageAreaFieldRefInput<$PrismaModel>
    in?: $Enums.StorageArea[]
    notIn?: $Enums.StorageArea[]
    not?: NestedEnumStorageAreaWithAggregatesFilter<$PrismaModel> | $Enums.StorageArea
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStorageAreaFilter<$PrismaModel>
    _max?: NestedEnumStorageAreaFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProductVariantCreateWithoutMedicationInput = {
    id?: string
    strength?: string | null
    route?: $Enums.Route
    dosageForm?: $Enums.DosageForm
    ndc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: LocationCreateNestedManyWithoutProductVariantInput
    placements?: VariantPlacementCreateNestedManyWithoutProductVariantInput
  }

  export type ProductVariantUncheckedCreateWithoutMedicationInput = {
    id?: string
    strength?: string | null
    route?: $Enums.Route
    dosageForm?: $Enums.DosageForm
    ndc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: LocationUncheckedCreateNestedManyWithoutProductVariantInput
    placements?: VariantPlacementUncheckedCreateNestedManyWithoutProductVariantInput
  }

  export type ProductVariantCreateOrConnectWithoutMedicationInput = {
    where: ProductVariantWhereUniqueInput
    create: XOR<ProductVariantCreateWithoutMedicationInput, ProductVariantUncheckedCreateWithoutMedicationInput>
  }

  export type ProductVariantCreateManyMedicationInputEnvelope = {
    data: ProductVariantCreateManyMedicationInput | ProductVariantCreateManyMedicationInput[]
  }

  export type ProductVariantUpsertWithWhereUniqueWithoutMedicationInput = {
    where: ProductVariantWhereUniqueInput
    update: XOR<ProductVariantUpdateWithoutMedicationInput, ProductVariantUncheckedUpdateWithoutMedicationInput>
    create: XOR<ProductVariantCreateWithoutMedicationInput, ProductVariantUncheckedCreateWithoutMedicationInput>
  }

  export type ProductVariantUpdateWithWhereUniqueWithoutMedicationInput = {
    where: ProductVariantWhereUniqueInput
    data: XOR<ProductVariantUpdateWithoutMedicationInput, ProductVariantUncheckedUpdateWithoutMedicationInput>
  }

  export type ProductVariantUpdateManyWithWhereWithoutMedicationInput = {
    where: ProductVariantScalarWhereInput
    data: XOR<ProductVariantUpdateManyMutationInput, ProductVariantUncheckedUpdateManyWithoutMedicationInput>
  }

  export type ProductVariantScalarWhereInput = {
    AND?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
    OR?: ProductVariantScalarWhereInput[]
    NOT?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
    id?: StringFilter<"ProductVariant"> | string
    medicationId?: StringFilter<"ProductVariant"> | string
    strength?: StringNullableFilter<"ProductVariant"> | string | null
    route?: EnumRouteFilter<"ProductVariant"> | $Enums.Route
    dosageForm?: EnumDosageFormFilter<"ProductVariant"> | $Enums.DosageForm
    ndc?: StringNullableFilter<"ProductVariant"> | string | null
    createdAt?: DateTimeFilter<"ProductVariant"> | Date | string
    updatedAt?: DateTimeFilter<"ProductVariant"> | Date | string
  }

  export type MedicationCreateWithoutVariantsInput = {
    id?: string
    genericName: string
    brandNames?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationUncheckedCreateWithoutVariantsInput = {
    id?: string
    genericName: string
    brandNames?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationCreateOrConnectWithoutVariantsInput = {
    where: MedicationWhereUniqueInput
    create: XOR<MedicationCreateWithoutVariantsInput, MedicationUncheckedCreateWithoutVariantsInput>
  }

  export type LocationCreateWithoutProductVariantInput = {
    id?: string
    area: $Enums.StorageArea
    label: string
    cassetteNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationUncheckedCreateWithoutProductVariantInput = {
    id?: string
    area: $Enums.StorageArea
    label: string
    cassetteNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationCreateOrConnectWithoutProductVariantInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutProductVariantInput, LocationUncheckedCreateWithoutProductVariantInput>
  }

  export type LocationCreateManyProductVariantInputEnvelope = {
    data: LocationCreateManyProductVariantInput | LocationCreateManyProductVariantInput[]
  }

  export type VariantPlacementCreateWithoutProductVariantInput = {
    id?: string
    isPrimary?: boolean
    cassetteNumber?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    storageLocation: StorageLocationCreateNestedOneWithoutPlacementsInput
  }

  export type VariantPlacementUncheckedCreateWithoutProductVariantInput = {
    id?: string
    storageLocationId: string
    isPrimary?: boolean
    cassetteNumber?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VariantPlacementCreateOrConnectWithoutProductVariantInput = {
    where: VariantPlacementWhereUniqueInput
    create: XOR<VariantPlacementCreateWithoutProductVariantInput, VariantPlacementUncheckedCreateWithoutProductVariantInput>
  }

  export type VariantPlacementCreateManyProductVariantInputEnvelope = {
    data: VariantPlacementCreateManyProductVariantInput | VariantPlacementCreateManyProductVariantInput[]
  }

  export type MedicationUpsertWithoutVariantsInput = {
    update: XOR<MedicationUpdateWithoutVariantsInput, MedicationUncheckedUpdateWithoutVariantsInput>
    create: XOR<MedicationCreateWithoutVariantsInput, MedicationUncheckedCreateWithoutVariantsInput>
    where?: MedicationWhereInput
  }

  export type MedicationUpdateToOneWithWhereWithoutVariantsInput = {
    where?: MedicationWhereInput
    data: XOR<MedicationUpdateWithoutVariantsInput, MedicationUncheckedUpdateWithoutVariantsInput>
  }

  export type MedicationUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    brandNames?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationUncheckedUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    brandNames?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUpsertWithWhereUniqueWithoutProductVariantInput = {
    where: LocationWhereUniqueInput
    update: XOR<LocationUpdateWithoutProductVariantInput, LocationUncheckedUpdateWithoutProductVariantInput>
    create: XOR<LocationCreateWithoutProductVariantInput, LocationUncheckedCreateWithoutProductVariantInput>
  }

  export type LocationUpdateWithWhereUniqueWithoutProductVariantInput = {
    where: LocationWhereUniqueInput
    data: XOR<LocationUpdateWithoutProductVariantInput, LocationUncheckedUpdateWithoutProductVariantInput>
  }

  export type LocationUpdateManyWithWhereWithoutProductVariantInput = {
    where: LocationScalarWhereInput
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyWithoutProductVariantInput>
  }

  export type LocationScalarWhereInput = {
    AND?: LocationScalarWhereInput | LocationScalarWhereInput[]
    OR?: LocationScalarWhereInput[]
    NOT?: LocationScalarWhereInput | LocationScalarWhereInput[]
    id?: StringFilter<"Location"> | string
    productVariantId?: StringFilter<"Location"> | string
    area?: EnumStorageAreaFilter<"Location"> | $Enums.StorageArea
    label?: StringFilter<"Location"> | string
    cassetteNumber?: StringNullableFilter<"Location"> | string | null
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
  }

  export type VariantPlacementUpsertWithWhereUniqueWithoutProductVariantInput = {
    where: VariantPlacementWhereUniqueInput
    update: XOR<VariantPlacementUpdateWithoutProductVariantInput, VariantPlacementUncheckedUpdateWithoutProductVariantInput>
    create: XOR<VariantPlacementCreateWithoutProductVariantInput, VariantPlacementUncheckedCreateWithoutProductVariantInput>
  }

  export type VariantPlacementUpdateWithWhereUniqueWithoutProductVariantInput = {
    where: VariantPlacementWhereUniqueInput
    data: XOR<VariantPlacementUpdateWithoutProductVariantInput, VariantPlacementUncheckedUpdateWithoutProductVariantInput>
  }

  export type VariantPlacementUpdateManyWithWhereWithoutProductVariantInput = {
    where: VariantPlacementScalarWhereInput
    data: XOR<VariantPlacementUpdateManyMutationInput, VariantPlacementUncheckedUpdateManyWithoutProductVariantInput>
  }

  export type VariantPlacementScalarWhereInput = {
    AND?: VariantPlacementScalarWhereInput | VariantPlacementScalarWhereInput[]
    OR?: VariantPlacementScalarWhereInput[]
    NOT?: VariantPlacementScalarWhereInput | VariantPlacementScalarWhereInput[]
    id?: StringFilter<"VariantPlacement"> | string
    productVariantId?: StringFilter<"VariantPlacement"> | string
    storageLocationId?: StringFilter<"VariantPlacement"> | string
    isPrimary?: BoolFilter<"VariantPlacement"> | boolean
    cassetteNumber?: StringNullableFilter<"VariantPlacement"> | string | null
    notes?: StringNullableFilter<"VariantPlacement"> | string | null
    createdAt?: DateTimeFilter<"VariantPlacement"> | Date | string
    updatedAt?: DateTimeFilter<"VariantPlacement"> | Date | string
  }

  export type VariantPlacementCreateWithoutStorageLocationInput = {
    id?: string
    isPrimary?: boolean
    cassetteNumber?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productVariant: ProductVariantCreateNestedOneWithoutPlacementsInput
  }

  export type VariantPlacementUncheckedCreateWithoutStorageLocationInput = {
    id?: string
    productVariantId: string
    isPrimary?: boolean
    cassetteNumber?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VariantPlacementCreateOrConnectWithoutStorageLocationInput = {
    where: VariantPlacementWhereUniqueInput
    create: XOR<VariantPlacementCreateWithoutStorageLocationInput, VariantPlacementUncheckedCreateWithoutStorageLocationInput>
  }

  export type VariantPlacementCreateManyStorageLocationInputEnvelope = {
    data: VariantPlacementCreateManyStorageLocationInput | VariantPlacementCreateManyStorageLocationInput[]
  }

  export type VariantPlacementUpsertWithWhereUniqueWithoutStorageLocationInput = {
    where: VariantPlacementWhereUniqueInput
    update: XOR<VariantPlacementUpdateWithoutStorageLocationInput, VariantPlacementUncheckedUpdateWithoutStorageLocationInput>
    create: XOR<VariantPlacementCreateWithoutStorageLocationInput, VariantPlacementUncheckedCreateWithoutStorageLocationInput>
  }

  export type VariantPlacementUpdateWithWhereUniqueWithoutStorageLocationInput = {
    where: VariantPlacementWhereUniqueInput
    data: XOR<VariantPlacementUpdateWithoutStorageLocationInput, VariantPlacementUncheckedUpdateWithoutStorageLocationInput>
  }

  export type VariantPlacementUpdateManyWithWhereWithoutStorageLocationInput = {
    where: VariantPlacementScalarWhereInput
    data: XOR<VariantPlacementUpdateManyMutationInput, VariantPlacementUncheckedUpdateManyWithoutStorageLocationInput>
  }

  export type ProductVariantCreateWithoutPlacementsInput = {
    id?: string
    strength?: string | null
    route?: $Enums.Route
    dosageForm?: $Enums.DosageForm
    ndc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medication: MedicationCreateNestedOneWithoutVariantsInput
    locations?: LocationCreateNestedManyWithoutProductVariantInput
  }

  export type ProductVariantUncheckedCreateWithoutPlacementsInput = {
    id?: string
    medicationId: string
    strength?: string | null
    route?: $Enums.Route
    dosageForm?: $Enums.DosageForm
    ndc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: LocationUncheckedCreateNestedManyWithoutProductVariantInput
  }

  export type ProductVariantCreateOrConnectWithoutPlacementsInput = {
    where: ProductVariantWhereUniqueInput
    create: XOR<ProductVariantCreateWithoutPlacementsInput, ProductVariantUncheckedCreateWithoutPlacementsInput>
  }

  export type StorageLocationCreateWithoutPlacementsInput = {
    id?: string
    kind?: $Enums.StorageLocationKind
    area: $Enums.StorageArea
    label: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StorageLocationUncheckedCreateWithoutPlacementsInput = {
    id?: string
    kind?: $Enums.StorageLocationKind
    area: $Enums.StorageArea
    label: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StorageLocationCreateOrConnectWithoutPlacementsInput = {
    where: StorageLocationWhereUniqueInput
    create: XOR<StorageLocationCreateWithoutPlacementsInput, StorageLocationUncheckedCreateWithoutPlacementsInput>
  }

  export type ProductVariantUpsertWithoutPlacementsInput = {
    update: XOR<ProductVariantUpdateWithoutPlacementsInput, ProductVariantUncheckedUpdateWithoutPlacementsInput>
    create: XOR<ProductVariantCreateWithoutPlacementsInput, ProductVariantUncheckedCreateWithoutPlacementsInput>
    where?: ProductVariantWhereInput
  }

  export type ProductVariantUpdateToOneWithWhereWithoutPlacementsInput = {
    where?: ProductVariantWhereInput
    data: XOR<ProductVariantUpdateWithoutPlacementsInput, ProductVariantUncheckedUpdateWithoutPlacementsInput>
  }

  export type ProductVariantUpdateWithoutPlacementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    strength?: NullableStringFieldUpdateOperationsInput | string | null
    route?: EnumRouteFieldUpdateOperationsInput | $Enums.Route
    dosageForm?: EnumDosageFormFieldUpdateOperationsInput | $Enums.DosageForm
    ndc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medication?: MedicationUpdateOneRequiredWithoutVariantsNestedInput
    locations?: LocationUpdateManyWithoutProductVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateWithoutPlacementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    strength?: NullableStringFieldUpdateOperationsInput | string | null
    route?: EnumRouteFieldUpdateOperationsInput | $Enums.Route
    dosageForm?: EnumDosageFormFieldUpdateOperationsInput | $Enums.DosageForm
    ndc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationUncheckedUpdateManyWithoutProductVariantNestedInput
  }

  export type StorageLocationUpsertWithoutPlacementsInput = {
    update: XOR<StorageLocationUpdateWithoutPlacementsInput, StorageLocationUncheckedUpdateWithoutPlacementsInput>
    create: XOR<StorageLocationCreateWithoutPlacementsInput, StorageLocationUncheckedCreateWithoutPlacementsInput>
    where?: StorageLocationWhereInput
  }

  export type StorageLocationUpdateToOneWithWhereWithoutPlacementsInput = {
    where?: StorageLocationWhereInput
    data: XOR<StorageLocationUpdateWithoutPlacementsInput, StorageLocationUncheckedUpdateWithoutPlacementsInput>
  }

  export type StorageLocationUpdateWithoutPlacementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    kind?: EnumStorageLocationKindFieldUpdateOperationsInput | $Enums.StorageLocationKind
    area?: EnumStorageAreaFieldUpdateOperationsInput | $Enums.StorageArea
    label?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StorageLocationUncheckedUpdateWithoutPlacementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    kind?: EnumStorageLocationKindFieldUpdateOperationsInput | $Enums.StorageLocationKind
    area?: EnumStorageAreaFieldUpdateOperationsInput | $Enums.StorageArea
    label?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVariantCreateWithoutLocationsInput = {
    id?: string
    strength?: string | null
    route?: $Enums.Route
    dosageForm?: $Enums.DosageForm
    ndc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medication: MedicationCreateNestedOneWithoutVariantsInput
    placements?: VariantPlacementCreateNestedManyWithoutProductVariantInput
  }

  export type ProductVariantUncheckedCreateWithoutLocationsInput = {
    id?: string
    medicationId: string
    strength?: string | null
    route?: $Enums.Route
    dosageForm?: $Enums.DosageForm
    ndc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    placements?: VariantPlacementUncheckedCreateNestedManyWithoutProductVariantInput
  }

  export type ProductVariantCreateOrConnectWithoutLocationsInput = {
    where: ProductVariantWhereUniqueInput
    create: XOR<ProductVariantCreateWithoutLocationsInput, ProductVariantUncheckedCreateWithoutLocationsInput>
  }

  export type ProductVariantUpsertWithoutLocationsInput = {
    update: XOR<ProductVariantUpdateWithoutLocationsInput, ProductVariantUncheckedUpdateWithoutLocationsInput>
    create: XOR<ProductVariantCreateWithoutLocationsInput, ProductVariantUncheckedCreateWithoutLocationsInput>
    where?: ProductVariantWhereInput
  }

  export type ProductVariantUpdateToOneWithWhereWithoutLocationsInput = {
    where?: ProductVariantWhereInput
    data: XOR<ProductVariantUpdateWithoutLocationsInput, ProductVariantUncheckedUpdateWithoutLocationsInput>
  }

  export type ProductVariantUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    strength?: NullableStringFieldUpdateOperationsInput | string | null
    route?: EnumRouteFieldUpdateOperationsInput | $Enums.Route
    dosageForm?: EnumDosageFormFieldUpdateOperationsInput | $Enums.DosageForm
    ndc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medication?: MedicationUpdateOneRequiredWithoutVariantsNestedInput
    placements?: VariantPlacementUpdateManyWithoutProductVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    strength?: NullableStringFieldUpdateOperationsInput | string | null
    route?: EnumRouteFieldUpdateOperationsInput | $Enums.Route
    dosageForm?: EnumDosageFormFieldUpdateOperationsInput | $Enums.DosageForm
    ndc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    placements?: VariantPlacementUncheckedUpdateManyWithoutProductVariantNestedInput
  }

  export type ProductVariantCreateManyMedicationInput = {
    id?: string
    strength?: string | null
    route?: $Enums.Route
    dosageForm?: $Enums.DosageForm
    ndc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductVariantUpdateWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    strength?: NullableStringFieldUpdateOperationsInput | string | null
    route?: EnumRouteFieldUpdateOperationsInput | $Enums.Route
    dosageForm?: EnumDosageFormFieldUpdateOperationsInput | $Enums.DosageForm
    ndc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationUpdateManyWithoutProductVariantNestedInput
    placements?: VariantPlacementUpdateManyWithoutProductVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    strength?: NullableStringFieldUpdateOperationsInput | string | null
    route?: EnumRouteFieldUpdateOperationsInput | $Enums.Route
    dosageForm?: EnumDosageFormFieldUpdateOperationsInput | $Enums.DosageForm
    ndc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationUncheckedUpdateManyWithoutProductVariantNestedInput
    placements?: VariantPlacementUncheckedUpdateManyWithoutProductVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateManyWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    strength?: NullableStringFieldUpdateOperationsInput | string | null
    route?: EnumRouteFieldUpdateOperationsInput | $Enums.Route
    dosageForm?: EnumDosageFormFieldUpdateOperationsInput | $Enums.DosageForm
    ndc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationCreateManyProductVariantInput = {
    id?: string
    area: $Enums.StorageArea
    label: string
    cassetteNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VariantPlacementCreateManyProductVariantInput = {
    id?: string
    storageLocationId: string
    isPrimary?: boolean
    cassetteNumber?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationUpdateWithoutProductVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    area?: EnumStorageAreaFieldUpdateOperationsInput | $Enums.StorageArea
    label?: StringFieldUpdateOperationsInput | string
    cassetteNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateWithoutProductVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    area?: EnumStorageAreaFieldUpdateOperationsInput | $Enums.StorageArea
    label?: StringFieldUpdateOperationsInput | string
    cassetteNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateManyWithoutProductVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    area?: EnumStorageAreaFieldUpdateOperationsInput | $Enums.StorageArea
    label?: StringFieldUpdateOperationsInput | string
    cassetteNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantPlacementUpdateWithoutProductVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    cassetteNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    storageLocation?: StorageLocationUpdateOneRequiredWithoutPlacementsNestedInput
  }

  export type VariantPlacementUncheckedUpdateWithoutProductVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    storageLocationId?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    cassetteNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantPlacementUncheckedUpdateManyWithoutProductVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    storageLocationId?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    cassetteNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantPlacementCreateManyStorageLocationInput = {
    id?: string
    productVariantId: string
    isPrimary?: boolean
    cassetteNumber?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VariantPlacementUpdateWithoutStorageLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    cassetteNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productVariant?: ProductVariantUpdateOneRequiredWithoutPlacementsNestedInput
  }

  export type VariantPlacementUncheckedUpdateWithoutStorageLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productVariantId?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    cassetteNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantPlacementUncheckedUpdateManyWithoutStorageLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productVariantId?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    cassetteNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
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