import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/vue'

import AppTitle from '~/components/AppTitle.vue'

describe('AppTitle', () => {
  test('コンポーネントの描画ができること', () => {
    const { html } = render(AppTitle)

    expect(html()).contain('data-testid="app-title"')
  })
})
