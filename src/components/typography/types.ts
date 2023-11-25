import React from 'react';

export interface IH {
  item: string;
  textAlign?: 'center' | 'left' | 'end' | 'right' | 'start';
  color?: string;
  ellipsis?: any;
  fontWeight?: number;
  hoverColor?: string;
  ellipsisStyle?: object;
}

export interface ITypography {
  item: React.ReactNode;
  textAlign?: 'center' | 'left' | 'end' | 'right' | 'start';
  color?: string;
  fontWeight?: number;
  ellipsisStyle?: {
    display: string;
    WebkitBoxOrient: string;
    WebkitLineClamp: number; // Number of lines before ellipsis
    overflow: string;
  };
  sx?: object;
}
