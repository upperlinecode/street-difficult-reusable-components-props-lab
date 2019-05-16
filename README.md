# Reusable Components with Props - Lab

![street easy](example.png)

## The Goal
StreetEasy is a site used to buy, sell, and rent apartments in New York City. StreetEasy also leverages both public and in house data to publish a blog about real estate trends in the city.

The problem is, they could be creating their blog posts much more efficiently. Instead of designing individual graphics as they do now (see example above), they could be using reusable components in React to quickly create, update and display data on their site. In this lab we are going to refactor a page from their blog using React - they'll thank us for this later.

## The Setup
Clone this repository. In the terminal, run the following commands:

```HTML
npm install
npm start
```

After it has installed, go to the link below to check out the blog post we will be refactoring:
[Cost of Living in NYC](https://streeteasy.com/blog/cost-of-living-nyc-income-housing-all-5-boroughs/)


## The Lab
1. We are going to be begin by making the Staten Island graphic from the StreetEasy blog post. Add a `DataView` component to under the `Navbar` component. Add the following attributes to the `DataView` component. This will pass down the provided information as props to the component.

```javascript
<DataView
  borough="Brooklyn"
  renterCost="$14,292"
  ownerCost="$29,752"/>
```

2. Add a `DataView` component for each of the boroughs (Queens, Brooklyn, Manhattan, Bronx). Fill in the attributes with the data provided in the StreetEasy blog post.

3. Open the `DataView` component. We are going to add another row so we can display the annual income in this component. To do so, add the code below to line 21.

```javascript
<div className="text bottom">
  <h2 className="text-data">{props.renterIncome}</h2>
  <h3 className="text-label">Annual Income</h3>
</div>
```

Then add the code under to line 34.

```javascript
<div className="text bottom">
  <h2 className="text-data">{props.ownerIncome}</h2>
  <h3 className="text-label">Annual Housing Cost</h3>
</div>
```

To add the borders between the rows, delete the `bottom` class from lines 18 and 31. Then, pass the annual income data as props to the `DataView` component.

```javascript
<DataView
  borough="Brooklyn"
  renterCost="$14,292"
  ownerCost="$29,752"
  renterIncome="$37,882"
  ownerIncome="$94,177"/>
```

4. Add the `renterIncome` attribute and `ownerIncome` attribute to each `DataView` component with the appropriate data.

## Stretch

1. Add another row to the `DataView` component to display the "Cost-To-Income ratio" for each borough.

2. You'll notice there is a message at the bottom of each graphic. For example, in the Staten Island graphic it says "Cost of living vastly differs for renters and buyers." Add this piece of styling and text to the DataView component.
