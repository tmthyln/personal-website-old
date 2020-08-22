@def title = "Analysis of BogoSelectionSort"
@def tags = ["umd", "math"]
@def hascode = true

# From BogoSelectionSort to infinity and beyond!

A student in a class I TA for at UMD decided to make a variant of a BOGO sort that has selection sort-like properties. On Piazza, they asked what the runtime would be, guessing a median runtime of $O(n^2n!)$.
               
Here’s the code in Java (pretty much verbatim):

```java
public static ArrayList<Integer> bogoSelectionSort(ArrayList<Integer> list) {
    ArrayList<Integer> ans = new ArrayList<>();
    int size = list.size();

    for (int i = 0; i < size(); i++) {
        int min = list.get(0);

        for (int j = 0; j < list.size(); j++)
            for (list.get(j) < min)
                min = list.get(j);

        if (min == list.get(0)) {
            ans.add(min);
            list.remove(0);
        } else {
            Collections.shuffle(list);
            i--;
        }
    }
    return ans;
}
```

## Best-Case Analysis
Well, obviously, the best case happens when we very, very luckily always get the minimum to be the first element (or the input is already sorted). Approximately, the outer for loop runs proportional to 