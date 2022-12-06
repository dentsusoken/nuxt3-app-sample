import { describe, expect, test } from 'vitest'
import { fireEvent, render } from '@testing-library/vue'

import RefreshButton from '~/components/RefreshButton.vue'

describe('RefreshButton', () => {
  test('コンポーネントの描画ができること', () => {
    const { html } = render(RefreshButton)

    expect(html()).contain('data-testid="refresh-btn"')
  })

  test('Click時にイベントがemitされること', async () => {
    const { getByText, emitted } = render(RefreshButton)

    const button = getByText('画像入れ替え')

    expect(emitted('click')).toBeFalsy()

    await fireEvent.click(button)

    expect(emitted('click')).toBeTruthy()
  })
})
