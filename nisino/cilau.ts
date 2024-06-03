type T1 = { a: string; b: number; c: boolean };
type T2 = { a: number; c: boolean };

// Exclude from T1 those types that are assignable to T2
type ExcludedFromT1 = Exclude<keyof T1, keyof T2>;

// Extract from T1 those types that are assignable to T2
type ExtractedFromT1 = Extract<keyof T1, keyof T2>;

// Usage of ExcludedFromT1 and ExtractedFromT1
let exampleExcluded: ExcludedFromT1 = 'b'; // Only 'b' is allowed
let exampleExtracted: ExtractedFromT1 = 'c'; // 'a' or 'c' are allowed
