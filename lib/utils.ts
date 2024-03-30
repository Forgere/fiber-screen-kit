import React from 'react';

export type PropsWithOptionalChildren<P = unknown> = P & { children?: React.ReactNode };