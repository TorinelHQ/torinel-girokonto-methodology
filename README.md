# Torinel Girokonto Methodology

Public methodology notes and lightweight helper functions for Torinel’s German Girokonto workflows.

This repository documents selected public concepts used around German IBAN handling and Girokonto workflow education. It is intentionally limited to non-proprietary helper logic and public methodology notes.

## What this repository includes

- German IBAN normalization helper
- German IBAN print formatting helper
- BLZ extraction from German IBANs
- lightweight examples
- public methodology documentation

## What this repository does not include

This repository does **not** contain Torinel’s production systems, including:

- the production Girokonto-Kündigungsassistent
- the bank recipient resolution engine
- the full BLZ/bank-address directory
- PDF or cancellation-letter generation logic
- proprietary risk scoring logic
- production WordPress/theme code
- private datasets, credentials, analytics, or deployment files

## German IBAN / BLZ rule

A German IBAN follows this simplified structure:

```text
DEkk BBBBBBBB CCCCCCCCCC
```

Where:

- `DE` = country code
- `kk` = check digits
- `BBBBBBBB` = Bankleitzahl / BLZ
- `CCCCCCCCCC` = account number

The BLZ is found in digits 5–12 of the normalized IBAN.

Example:

```text
DE89 3704 0044 0532 0130 00
```

Normalized:

```text
DE89370400440532013000
```

BLZ:

```text
37040044
```

## Production note

Torinel’s live tools use additional proprietary validation, data integrity checks, recipient-resolution logic, and workflow rules that are not included in this public repository.

## License

MIT
