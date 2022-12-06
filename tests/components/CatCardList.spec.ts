import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/vue'

import CatCardList from '~/components/CatCardList.vue'
import { CatResponse } from '~/types'

describe('CatCardList', () => {
  test('コンポーネントの描画ができること', () => {
    const testId = 'cat-list'

    const ids = [1, 2, 3]
    const cats: CatResponse[] = ids.map((id) => {
      return {
        id: `test-${id}`,
        url: 'https://example.com',
        width: 100,
        height: 100
      }
    })

    const { getAllByTestId } = render(CatCardList, { props: { catList: cats } })
    expect(getAllByTestId(testId).length).toBe(1)
  })
})
