'use client';

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Items } from '../types/items';

interface CheckBoxProps {
  items: Items[];
  removeItem: (itemId: string) => void;
}

export default function CheckboxList({ items, removeItem }: CheckBoxProps) {
  return (
    <>
      <List>
        {items.map((item) => (
          <ListItem
            key={item.id}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="comments"
                onClick={() => removeItem(item.id)}
              >
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemText id={item.id} primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}
