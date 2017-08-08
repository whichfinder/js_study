def bubble_sort_array(arr):
    param = True
    while param:
        param = False
        for index in range(0, len(arr)-1):
            if arr[index] > arr[index+1]:
                arr[index], arr[index+1] = arr[index+1], arr[index]
                param = True
    return arr

