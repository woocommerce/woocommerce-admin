Rating
============

Use `Rating` to display a set of stars, filled, empty or half-filled, that represents a rating in a scale between 0 and the prop `totalStars` (default 5).

## How to use:

```jsx
import Rating from 'components/rating';

render: function() {
  return (
	<div>
		<Rating rating={ 2.5 } />
		<Rating rating={ 3 } totalStars={ 6 } />
	</div>
  );
}
```

## Props

* `rating`: Number of stars that should be filled. You can pass a partial number of stars like `2.5`.
* `totalStars`: Default 5. The total number of stars the rating is out of.
* `size`: Default 18. The size in pixels the stars should be rendered at.
* `className`: Additional CSS classes.