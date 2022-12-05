import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/vue'

import CatCard from '~/components/CatCard.vue'
import { CatResponse } from '~/types'

describe('CatCard', () => {
  test('コンポーネントの描画ができること', () => {
    const catData: CatResponse = {
      id: 'test',
      url: 'https://example.com',
      width: 100,
      height: 100
    }
    const { getAllByTestId } = render(CatCard, { props: { data: catData } })
    const results = getAllByTestId(catData.id)

    expect(results.length).toBe(1)
  })
})
