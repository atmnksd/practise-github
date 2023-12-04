import {  expect } from '@playwright/test';
import { login } from '../../testdata/user';
import { test } from '../../fixture/user.fixture'
import { TODO_RESOURCE } from '../../config';
test('creation of todo should work', async ({ authenticatedRequest }) => {
  const resp = await authenticatedRequest.post(TODO_RESOURCE,{
    title:'Bring Milk'
  })
  expect(resp.status()).toBe(201)
});

// First 
