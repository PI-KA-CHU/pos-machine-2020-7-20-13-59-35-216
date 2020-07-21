
# Requirement
A cash register (POS) system is used in the store for settlement of the store. This cashier will settle and print the receipt (Receipt) according to the item(Item) in the customer's shopping cart (Cart) at the time of settlement.

We need to implement a function called printReceipt, which can input the data of the specified format as a parameter and then output the text of the receipt in the browser console.

This time, the input will be an array of barcodes (string). For example:
```javascript
[
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000001',
  'ITEM000001',
  'ITEM000004'
]
```

Then the output should be 
```
***<store earning no money>Receipt ***
Name: Coca-Cola, Quantity: 5, Unit price: 3 (yuan), Subtotal: 15 (yuan)
Name: Sprite, Quantity: 2, Unit price: 3 (yuan), Subtotal: 6 (yuan)
Name: Battery, Quantity: 1, Unit price: 2 (yuan), Subtotal: 2 (yuan)
----------------------
Total: 23 (yuan)
**********************
```

Suppose that our database is as follows:
```javascript
[
   {
      barcode: 'ITEM000000',
      name: 'Coca-Cola',
      price: 3
    },
    {
      barcode: 'ITEM000001',
      name: 'Sprite',
      price: 3
    },
    {
      barcode: 'ITEM000002',
      name: 'Apple',
      price: 5
    },
    {
      barcode: 'ITEM000003',
      name: 'Litchi',
      price: 15
    },
    {
      barcode: 'ITEM000004',
      name: 'Battery',
      price: 2
    },
    {
      barcode: 'ITEM000005',
      name: 'Instant Noodles',
      price: 4
    }
]
```

# Principal

1. Please draw context diagram.
2. Please declare all the methods according to your diagram.
3. Please implement the function according to the context diagram
4. Please repeat step 3 until all functions are implemented.

# Tasking
1. 计算每个Item的数量
- 输入：barcodes:[string]
- 输出：cartitem:[{itemCode:string,quantity:int}]
2. 完善Item的信息
- 输入：cartItem:[{itemCode:string,quantity:int}]
- 输出：cartItemDetails:[{itemCode:string,itemName:string,quantity:int,unitPrice:int}]
3. 计算每个Item的总价格
- 输入：cartItemDetails:[{itemCode:string,itemName:string,quantity:int,unitPrice:int}]
- 输出：cartItemDetailsWithTotalPrice:[{itemCode:string,itemName:string,quantity:int,unitPrice:int,totalPrice:int}]
4. 计算所有Item的总价
- 输入：cartItemDetailsWithTotalPrice:[{itemCode:string,itemName:string,quantity:int,unitPrice:int,totalPrice:int}]
- 输出：totalPrice:int
5. 格式化数据
- 输入：
 - cartItemDetailsWithTotalPrice:[{itemCode:string,itemName:string,quantity:int,unitPrice:int,totalPrice:int}]
 - totalPrice:int
- 输出：receipt:string
6. 输出数据

# Context map
![Pos v0.2.png](http://ww1.sinaimg.cn/large/0061iV1igy1ggyzz026uzj32m61egaip.jpg)

# PDCA

|      | 任务一：编写Tasking                      |
| :--- | ---------------------------------------- |
| P    | 10min                                    |
| D    | 8min                                     |
| C    | 由于课堂老师有讲解过，实现起来比较有思路 |
| A    | 还需要多做练习、多实战，与同事交流经验   |

|      | 任务二：画context map              |
| ---- | ---------------------------------- |
| P    | 15min                              |
| D    | 13min                              |
| C    | 在命名和调整图像结构花费的时间较多 |
| A    | 在方法命名上仍需要多实践           |

|      | 任务三：编码                                             |
| ---- | -------------------------------------------------------- |
| P    | 40min                                                    |
| D    | 60min                                                    |
| C    | 对JS的编码方式仍不是很熟悉，有些语法不太熟悉             |
| A    | 需要多做JS相关的实战练习，多向JS较强的同事学习，尽快熟悉 |

|      | 任务四：Debug                                            |
| ---- | -------------------------------------------------------- |
| P    | 15min                                                    |
| D    | 8min                                                     |
| C    | 程序的整体逻辑是正确的，只是JS语法不熟悉导致部分结果有误 |
| A    | 仍然是需要多做JS相关练习                                 |

