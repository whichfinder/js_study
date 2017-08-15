def bubble_sort_array(arr):
    param = True
    while param:
        param = False
        for index in range(0, len(arr)-1):
            if arr[index] > arr[index+1]:
                arr[index], arr[index+1] = arr[index+1], arr[index]
                param = True
    return arr


def merge_sort(array):
    if len(array) > 1:
        divider = len(array) // 2
        left_array = array[:divider]
        right_array = array[divider:]
        merge_sort(left_array)
        merge_sort(right_array)
           
        i = j = k = 0

        while i < len(left_array) and j < len(right_array):
            if left_array[i] < right_array[j]:
                array[k] = left_array[i]
                i += 1
            else:
                array[k] = right_array[j]
                j += 1
            k += 1

        while i < len(left_array):
            array[k]=left_array[i]
            i += 1
            k += 1

        while j < len(right_array):
            array[k]=right_array[j]
            j += 1
            k += 1  
    return array

# def merge_sort(array):
#     left_array = []
#     right_array = []
#     if len(array) > 1:
#         divider = len(array) // 2
#         left_array = array[:divider]
#         right_array = array[divider:]
        
#     return merge(merge_sort(left_array), merge_sort(right_array))

# def merge(left_array, right_array):
    
#     result_array = []
    
#     while len(left_array) and left_array(right_array):
#         if left_array[0] <= result_array[0]:
#             result_array.append(left_array.pop(0))
#         else:
#             result_array.append(right_array.pop(0))

#     while len(left_array):
#         result_array.append(left_array.pop(0))

#     while len(result_array):
#         result_array.append(right_array.pop(0))



        
