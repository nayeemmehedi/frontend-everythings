# react router public, private, roll base, child route . All react router dom done.

# React Memorization
```
React.memo():  lets you skip re-rendering a component when its props are unchanged.

const MemoizedComponent = memo(SomeComponent, arePropsEqual?)
example :
const Greeting = (function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
});

export default Greeting;

useCallback : full funtion ta mone rkhe 

useMemo: useMemo return value ta mone rkhe, call kora lgbe na .
```

## useEFFECT VS useLAYOUTEFFECT
```
useeffect - React প্রথমে component টিকে render করে তারপর useEffect এর কোডটি চালায়।

uselayouteffrct - useLayoutEffect component render হওয়ার পরপরই, কিন্তু DOM পরিবর্তনের আগে চালানো হয়। এটি synchronous বা দ্রুত effect হিসেবে কাজ করে। DOM পরিবর্তনের আগেই effect চালানোর জন্য এটি ব্যবহার করা হ

```